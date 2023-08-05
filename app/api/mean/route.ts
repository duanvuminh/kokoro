import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IChatGptRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanRepo = getContainer().get<IChatGptRepository>(TYPES.IChatGptRepository);
  let res = "";
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (postId !== undefined) {
    res = await meanRepo.getMean(postId!);
  }
  if (res == "") {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  return NextResponse.json({ result: res });
}
