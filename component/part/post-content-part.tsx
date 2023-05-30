import { PostContentSummaryPart } from "component/part";
export function PostContentPart({
  postId,
  Content,
}: {
  postId: string;
  Content: (props: any) => JSX.Element;
}): JSX.Element {
  return (
    <div>
      <PostContentSummaryPart postId={postId} />
      <Content />
    </div>
  );
}
