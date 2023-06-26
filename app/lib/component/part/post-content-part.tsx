import { PostContentSummaryPart } from "app/lib/component/part";
import { Fragment } from "react";
export function PostContentPart({
  postId,
  Content,
}: {
  postId: string;
  Content: (props: any) => JSX.Element;
}): JSX.Element {
  return (
    <Fragment>
      <PostContentSummaryPart postId={postId} />
      <Content />
    </Fragment>
  );
}
