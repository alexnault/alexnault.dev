import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { likeRepo } from "repos/likes";

const QuerySchema = z.object({
  slug: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = QuerySchema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const { slug } = result.data;

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
