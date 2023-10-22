import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { IDictionaryService } from "lib/service";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const meanUtilsRepo = getContainer().get<IDictionaryService>(
    TYPES.IDictionaryService
  );
  const data = await request.json();
  return authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      meanUtilsRepo.partialUpdateMean1(data.id, data.value);
      return NextResponse.json({ result: "ok" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}
