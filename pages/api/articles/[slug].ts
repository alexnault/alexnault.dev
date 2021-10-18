import type { NextApiRequest, NextApiResponse } from "next";

import { articleRepository } from "persistence";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === "GET") {
      const like_count = await articleRepository.getArticleLikeCount(slug);

      return res.status(200).json({ like_count });
    }
    if (req.method === "POST") {
      await articleRepository.likeArticle(slug);

      return res.status(200).json({});
    }
    // TODO default to success or error?
    return res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
}
