import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IMeanUtilsRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  let res = "";
  const postId = request.nextUrl.searchParams.get("postId");
  if (postId !== undefined) {
    res = await meanUtilsRepo.getExample(postId!);
    return NextResponse.json({ result: res });
  }
  if (res == "") {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
  return NextResponse.json({ result: res });
}
