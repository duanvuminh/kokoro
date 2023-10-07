import { indexAngolia } from "lib/app/service/angolia-repository";
import { authAdmin } from "lib/app/service/firestore-admin-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  return authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      const email = _.email ?? "";
      if (email == "duanvuminh@gmail.com") {
        indexAngolia.mean.deleteObject(data.objectID);
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((_) => {
      return NextResponse.json({ result: "error" });
    });
}
