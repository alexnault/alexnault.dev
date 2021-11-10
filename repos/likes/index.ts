import prisma from "repos/prisma";
import { PrismaLikeRepo } from "./PrismaLikeRepo";

const likeRepo = PrismaLikeRepo(prisma);

export { likeRepo };
