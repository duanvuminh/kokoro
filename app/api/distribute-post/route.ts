import { indexAngolia } from "lib/repository/angolia-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const saveObject = { objectID: data.postId, mean1: data.value };
  indexAngolia.partialUpdateObject(saveObject);
  return NextResponse.json({ result: "ok" });
}
