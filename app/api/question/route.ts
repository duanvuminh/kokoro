import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IMeanUtilsRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  const postId = request.nextUrl.searchParams.get("postId");
  if (postId !== undefined) {
    const res = await meanUtilsRepo.getQuestion(postId!);
    return NextResponse.json({ result: res });
  }
  return NextResponse.json({ result: "" });
}
