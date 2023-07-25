import { indexAngolia } from "lib/repository/angolia-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const angolia = await indexAngolia.getObject(postId);
  let text = angolia?.mean ?? ""
  return NextResponse.json({ result: text });
}
