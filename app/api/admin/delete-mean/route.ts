import { indexAngolia } from "lib/repository/angolia-repository";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      const email = _.email ?? "";
      if (email == "duanvuminh@gmail.com") {
        indexAngolia.deleteObject(data.objectID);
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}