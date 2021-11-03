import prisma from "repos/prisma";
import { PrismaLikeRepo } from "./PrismaArticleRepo";

const likeRepo = PrismaLikeRepo(prisma);

export { likeRepo };
