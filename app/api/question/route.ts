import { myContainer } from "inversify.config";
import { TYPES } from "app/lib/const";
import { IMeanUtilsRepository } from "app/lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  const jsonBody = await request.json();
  if (jsonBody.pageId !== undefined) {
    const res = await meanUtilsRepo.getQuestion(jsonBody.pageId);
    return NextResponse.json({ result: res });
  }
  return NextResponse.json({ result: "" });
}
