import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { IDictionaryService } from "lib/service";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const iDictionaryService = getContainer().get<IDictionaryService>(
    TYPES.IDictionaryService
  );
  return authAdmin
    .verifyIdToken(data.token)
    .then(async (_) => {
      const email = _.email ?? "";
      let ret = await iDictionaryService.partialUpdateMean(email,data)
      if (ret) {
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}
