import { indexAngolia } from "lib/app/service/angolia-repository";
import { authAdmin } from "lib/app/service/firestore-admin-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  return authAdmin
    .verifyIdToken(data.token)
    .then(async (_) => {
      const email = _.email ?? "";
      if (email == "duanvuminh@gmail.com") {
        const angolia = await indexAngolia.mean.getObject(data.id);
        indexAngolia.mean.partialUpdateObject({ ...angolia, mean: angolia.mean1 });
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}
