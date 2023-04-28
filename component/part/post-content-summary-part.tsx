import { SvgPath } from "lib/type";
import Image from "next/image";

export function PostContentSummaryPart({
  postId,
}: {
  postId: string;
}): JSX.Element {
  const id = postId.charCodeAt(0).toString(16);
  const path = `${SvgPath}0${id}.svg`;
  return (
    <details>
      <summary>Cách viết {postId}</summary>
      <div className="flex justify-center">
        <Image src={path} alt={id} width="250" height="250" />
      </div>
    </details>
  );
}
