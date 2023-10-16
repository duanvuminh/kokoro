import { hantuListConst } from "lib/const";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const kanji = searchParams.get("kanji") ?? "";
  if (hantuListConst()[kanji] != null) {
    return NextResponse.json({ result: [{ id: kanji, path: "post/kanji" }] });
  }
  return NextResponse.json({ result: [] });
}
