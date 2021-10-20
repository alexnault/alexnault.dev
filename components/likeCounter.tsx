import { useQuery, useMutation, useQueryClient } from "react-query";

import HeartIcon from "./icons/heart";

import { fetchJSON } from "utils/fetchJSON";

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

  if (likeCountQuery.data?.like_count == null) {
    return null;
  }

  return (
    <button
      onClick={() => likeMutation.mutate()}
      className="relative text-gray-500 hover:text-black hover:scale-105 active:scale-110 transition"
    >
      <HeartIcon className="mr-2" />
      {likeCountQuery.data.like_count}
    </button>
  );
}
