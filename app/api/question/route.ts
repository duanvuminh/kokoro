import { getContainer } from "inversify.config";
import { TYPES } from "lib/app/const";
import { IChatGptRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = getContainer().get<IChatGptRepository>(
    TYPES.IChatGptRepository
  );
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id !== undefined) {
    const res = await meanUtilsRepo.getQuestion(id!);
    return NextResponse.json({ result: res });
  }
  return NextResponse.json({ result: "" });
}
