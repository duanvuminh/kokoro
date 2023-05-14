import { TYPES } from "lib/type";
import { myContainer } from "inversify.config";
import { IMeanUtilsRepository } from "lib/repository";
import { type NextRequest,NextResponse } from 'next/server';

 
export async function POST(request: NextRequest) {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  const jsonBody = await request.json();
  console.log(jsonBody)
  if(jsonBody.pageId !== undefined){
    const res = await meanUtilsRepo.getQuestion(jsonBody.pageId);
    return NextResponse.json({result: res});
  }
  return NextResponse.json({result: ""});
}
