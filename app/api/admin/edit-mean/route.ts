import { indexAngolia } from "lib/repository/angolia-repository";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  return authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      const email = _.email ?? "";
      if (email == "duanvuminh@gmail.com") {
        const saveObject = { objectID: data.postId, mean: data.value };
        indexAngolia.partialUpdateObject(saveObject);
        return NextResponse.json({ result: "ok" });
      }
      return NextResponse.json({ result: "error" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}
