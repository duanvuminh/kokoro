import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IDictionaryService } from "lib/service";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const iDictionaryService = getContainer().get<IDictionaryService>(
    TYPES.IDictionaryService
  );
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const angolia = id != null ? await iDictionaryService.getMeanFromDb(id) : null;
  let text = angolia?.mean ?? "";
  return NextResponse.json({ result: text });
}
