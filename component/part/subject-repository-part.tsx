import { myContainer } from "inversify.config";
import { DayInMonthPartClient } from "component/part-client";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";

type Props = {
  pageId: string;
  postType: string;
  children:
    | string
    | JSX.Element
    | ((props: any) => JSX.Element)
    | React.ReactNode;
};

export function SubjectRepositoryPart({
  pageId,
  postType,
  children,
}: Props): JSX.Element {
  if (pageId == undefined || postType == undefined) return <Fragment />;
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, pageId);
  const Content = post.getMdx();
  return (
    <DayInMonthPartClient pageId={pageId} postType={postType}>
      <Content />
    </DayInMonthPartClient>
  );
}
