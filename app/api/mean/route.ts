import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IMeanRepository } from "lib/repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);
  let res = "";
  const jsonBody = await request.json();
  if (jsonBody.pageId !== undefined) {
    res = await meanRepo.getMean(jsonBody.pageId);
  }
  if (res == "") {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
  return NextResponse.json({ result: res });
}
