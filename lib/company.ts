import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Companies = Prisma.PromiseReturnType<typeof getCompanies>;
export type Company = Prisma.PromiseReturnType<typeof getCompany>;

export async function getCompanies() {
  const res = await prisma.company.findMany({
    include: {
      settings: true,
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
  return res;
}

export async function getCompany(slug: string) {
  const res = await prisma.company.findUnique({
    where: {
      slug: slug,
    },
    include: {
      settings: true,
    },
  });

  return res;
}
