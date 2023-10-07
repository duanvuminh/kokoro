import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IChatGptRepository } from "lib/service";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const meanUtilsRepo = getContainer().get<IChatGptRepository>(
    TYPES.IChatGptRepository
  );
  let res = "";
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id !== undefined) {
    res = await meanUtilsRepo.getExample(id!);
    return NextResponse.json({ result: res });
  }
  if (res == "") {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  return NextResponse.json({ result: res });
}
