import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IChatGptRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = getContainer().get<IChatGptRepository>(
    TYPES.IChatGptRepository
  );
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (postId !== undefined) {
    const res = await meanUtilsRepo.getQuestion(postId!);
    return NextResponse.json({ result: res });
  }
  return NextResponse.json({ result: "" });
}
