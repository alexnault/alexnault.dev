import prisma from "persistence/prisma";
import { PrismaArticleRepository } from "persistence/PrismaArticleRepository";

const articleRepository = PrismaArticleRepository(prisma);

export { articleRepository };
