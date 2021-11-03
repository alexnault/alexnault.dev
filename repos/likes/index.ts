import prisma from "repos/prisma";
import { PrismaLikeRepository } from "./PrismaArticleRepository";

const likeRepository = PrismaLikeRepository(prisma);

export { likeRepository };
