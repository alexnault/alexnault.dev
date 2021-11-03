import type { NextApiRequest, NextApiResponse } from "next";

import { likeRepo } from "repos/likes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === "GET") {
      const like_count = await likeRepo.getArticleLikeCount(slug);

      return res.status(200).json({ like_count });
    }

    if (req.method === "POST") {
      await likeRepo.likeArticle(slug);

      return res.status(200).json({});
    }

    return res.status(400).json({});
  } catch (e) {
    console.error(e);
    return res.status(500).json({});
  }
}
