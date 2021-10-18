import { useState, useEffect } from "react";

type Props = {
  slug: string;
};

export default function LikeCounter({ slug }: Props) {
  const [likeCount, setLikeCount] = useState<number | undefined>();

  // TODO use react-query?

  async function fetchLikeCount() {
    const res = await fetch(`/api/articles/${slug}`);

    const like_count = await res.json();

    setLikeCount(like_count.like_count);
  }

  useEffect(() => {
    fetchLikeCount();
  }, []);

  const handleClickLike = () => {
    setLikeCount((likeCount) => (likeCount ?? 0) + 1);
  };

  if (likeCount == null) {
    return null;
  }

  return (
    <div>
      {likeCount}
      <button onClick={handleClickLike}>Like</button>
    </div>
  );
}
