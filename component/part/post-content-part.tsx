import {SummaryPart} from 'component/part'
export function PostContentPart({
  postId,
  Summary,
  Content,
}: {
  postId: string;
  Summary: (props:any) => JSX.Element;
  Content: (props:any) => JSX.Element;
}): JSX.Element {
  return (
    <>
      <SummaryPart postId={postId}><Summary/></SummaryPart>
      <Content/>
    </>
  );
}
