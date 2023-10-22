import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { IDictionaryService } from "lib/service";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const meanUtilsRepo = getContainer().get<IDictionaryService>(
    TYPES.IDictionaryService
  );
  return authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      const email = _.email ?? "";
      if (meanUtilsRepo.deleteMeanFromDb(email, data.objectID)) {
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((_) => {
      return NextResponse.json({ result: "error" });
    });
}
