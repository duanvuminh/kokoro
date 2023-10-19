import Loading from "app/(subpage)/loading";
import { MeanUtilsPartClient } from "app/component/part-client";
import { getContainer } from "inversify.config";
import { TYPES, hantuListConst } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import Link from "next/link";
import { Fragment, Suspense } from "react";

type Props = {
  id: string;
  postType: string;
  children: any;
};

export function WordRepositoryPart({ id, postType, children }: Props) {
  if (id == undefined || postType == undefined) return <Fragment />;
  const chars = [...id];
  const hantu = chars.map((c, i) => hantuListConst()[c]?.hantu).join(" ");
  let postFactory = getContainer().get<IPostFactoryModel>(
    TYPES.IPostFactoryModel
  );
  let post = postFactory.Create(postType, id);
  let MeanUtilsPart = post.getSource();
  return (
    <div className="prose">
      {children}
      <h2>
        {chars.map((c, i) => (
          <Link href={`/post/kanji/${c}`} key={i}>
            {c}
          </Link>
        ))}
      </h2>
      <h3>{hantu}</h3>
      <Suspense fallback={<Loading />} key={id}>
        <MeanUtilsPart id={id} />
      </Suspense>
      <MeanUtilsPartClient id={id} />
    </div>
  );
}
