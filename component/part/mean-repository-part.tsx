import Loading from "app/loading";
import { MeanUtilsPartClient } from "component/part-client";
import { myContainer } from "inversify.config";
import { TYPES, hantuListConst } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import Link from "next/link";
import { Fragment, Suspense } from "react";

type Props = {
  postId: string;
  postType: string;
};

export async function MeanRepositoryPart({
  postId,
  postType,
}: Props): Promise<JSX.Element> {
  if (postId == undefined || postType == undefined) return <Fragment />;
  const chars = [...postId];
  const hantu = chars.map((c, i) => hantuListConst()[c]?.hantu).join(" ");
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  let MeanUtilsPart = post.getSource();
  return (
    <div className="prose">
      <h2>
        {chars.map((c, i) => (
          <Link href={`/post/kanji/${c}`} key={i}>
            {c}
          </Link>
        ))}
      </h2>
      <h3>{hantu}</h3>
      <Suspense fallback={<Loading />} key={postId}>
        <MeanUtilsPart postId={postId} />
      </Suspense>
      <MeanUtilsPartClient postId={postId} />
    </div>
  );
}
