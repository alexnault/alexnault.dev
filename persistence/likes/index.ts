import prisma from "persistence/prisma";
import { PrismaLikeRepository } from "./PrismaArticleRepository";

const likeRepository = PrismaLikeRepository(prisma);

export { likeRepository };
