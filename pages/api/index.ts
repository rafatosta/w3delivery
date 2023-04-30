// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from "@prisma/client";
import { getCompanies } from "@/lib/company";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prisma.PromiseReturnType<typeof getCompanies>>
) {
  const companies = await getCompanies();

  res.status(200).json(companies);
}
