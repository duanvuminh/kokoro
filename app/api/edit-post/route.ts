import { indexAngolia } from "lib/repository/angolia-repository";
import { authAdmin } from "lib/repository/firestore-admin-repository";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  return await authAdmin
    .verifyIdToken(data.token)
    .then((_) => {
      const saveObject = { objectID: data.postId, mean: data.value };
      indexAngolia.partialUpdateObject(saveObject);
      return NextResponse.json({ result: "ok" });
    })
    .catch((error) => {
      return NextResponse.json({ result: "error" });
    });
}
