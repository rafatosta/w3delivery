import { getCompany } from "@/lib/company";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const slug = params.slug;
  const data = await getCompany(slug);

  return NextResponse.json(data);
}
