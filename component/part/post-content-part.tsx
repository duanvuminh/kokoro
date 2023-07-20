import { PostContentSummaryPart } from "component/part";
import { Fragment } from "react";
export async function PostContentPart({
  postId,
  Content,
}: {
  postId: string;
  Content: (props: any) => JSX.Element | Promise<JSX.Element>;
}): Promise<JSX.Element> {
  return (
    <Fragment>
      <PostContentSummaryPart postId={postId} />
      <Content />
    </Fragment>
  );
}
