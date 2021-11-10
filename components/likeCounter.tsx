import { useQuery, useMutation, useQueryClient } from "react-query";

import HeartIcon from "./icons/heart";

import { fetchJSON } from "utils/fetch";

type Props = {
  slug: string;
};

export default function LikeCounter({ slug }: Props) {
  const queryClient = useQueryClient();

  const likeCountQuery = useQuery(`api/articles/${slug}`, () =>
    fetchJSON(`/api/articles/${slug}`)
  );

  const likeMutation = useMutation(
    () => fetchJSON(`api/articles/${slug}`, { method: "POST" }),
    {
      onMutate: async () => {
        const previousValue = queryClient.getQueryData<{ like_count: number }>(
          `api/articles/${slug}`
        );

        if (previousValue) {
          queryClient.setQueryData(`api/articles/${slug}`, {
            like_count: previousValue.like_count + 1,
          });
        }
      },
    }
  );

  return (
    <button
      onClick={() => likeMutation.mutate()}
      className={`relative group hover:scale-105 active:scale-110 transition duration-200 ${
        likeCountQuery.data?.like_count != null ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeartIcon className="mr-2 text-gray-300 group-hover:text-black group-active:text-pink-500 transition" />
      <span className="text-gray-500 group-hover:text-black group-active:text-pink-500 transition">
        {likeCountQuery.data?.like_count}
      </span>
    </button>
  );
}
