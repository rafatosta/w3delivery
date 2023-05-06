import { getCompanies } from "@/lib/company";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getCompanies();
  return NextResponse.json(data);
}
