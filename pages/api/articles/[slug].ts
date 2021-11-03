import type { NextApiRequest, NextApiResponse } from "next";

import { likeRepository } from "persistence/likes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === "GET") {
      const like_count = await likeRepository.getArticleLikeCount(slug);

      return res.status(200).json({ like_count });
    }

    if (req.method === "POST") {
      await likeRepository.likeArticle(slug);

      return res.status(200).json({});
    }

    return res.status(400).json({});
  } catch (e) {
    console.error(e);
    return res.status(500).json({});
  }
}
