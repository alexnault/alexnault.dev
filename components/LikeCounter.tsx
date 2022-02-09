import { useQuery, useMutation, useQueryClient } from "react-query";

import HeartIcon from "components/icons/Heart";
import { SvgIconProps } from "components/SvgIcon";

import { fetchJSON } from "utils/fetch";

type Props = {
  slug: string;
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
  IconProps?: SvgIconProps;
};

export default function LikeCounter({
  slug,
  className,
  classNameIcon,
  classNameText,
  IconProps,
}: Props) {
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

  const handleClickLike = function (e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    likeMutation.mutate();
  };

  return (
    <button
      onClick={handleClickLike}
      className={`group relative flex items-center transition duration-200 hover:scale-105 active:scale-110 ${className} ${
        likeCountQuery.data?.like_count != null ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeartIcon
        className={`mr-2 text-gray-300 transition group-hover:text-black group-active:text-pink-500 ${classNameIcon}`}
        {...IconProps}
      />
      <span
        className={`text-gray-500 transition group-hover:text-black group-active:text-pink-500 ${classNameText}`}
      >
        {likeCountQuery.data?.like_count}
      </span>
    </button>
  );
}
