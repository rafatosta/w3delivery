import { prisma } from "./prisma";

export async function getCompanies() {
  const res = await prisma.company.findMany({
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
