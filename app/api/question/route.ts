import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IMeanUtilsRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (postId !== undefined) {
    const res = await meanUtilsRepo.getQuestion(postId!);
    return NextResponse.json({ result: res });
  }
  return NextResponse.json({ result: "" });
}
