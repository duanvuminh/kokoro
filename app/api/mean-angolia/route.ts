import { indexAngolia } from "lib/app/service/angolia-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const angolia = await indexAngolia.mean.getObject(id);
  let text = angolia?.mean ?? ""
  return NextResponse.json({ result: text });
}
