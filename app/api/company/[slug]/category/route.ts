import { getCategories } from "@/lib/category";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const data = await getCategories(params.slug);
  return NextResponse.json(data);
}
