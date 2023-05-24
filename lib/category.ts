import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type TypeCategories = Prisma.PromiseReturnType<typeof getCategories>;
export type TypeCategory = Prisma.PromiseReturnType<typeof getCategory>;

const productQueryDefault = Prisma.validator<Prisma.ProductArgs>()({});
export type TypeProduct = Prisma.ProductGetPayload<typeof productQueryDefault>;

export async function getCategories(slug: string) {
  const res = await prisma.category.findMany({
    include: {
      Product: true,
    },
    where: {
      Company: {
        slug: slug,
      },
    },
    orderBy: [
      {
        name: "asc",
      },
    ],
  });
  return res;
}

export async function getCategory(id: number) {
  const res = await prisma.category.findUnique({
    include: {
      Product: true,
    },
    where: {
      id: id,
    },
  });
  return res;
}
