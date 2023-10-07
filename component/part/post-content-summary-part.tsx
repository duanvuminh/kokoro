import { summaryTitle, svgPath } from "lib/app/const/app-text-const";
import Image from "next/image";

export function PostContentSummaryPart({
  id,
}: {
  id: string;
}): JSX.Element {
  const postId = id.charCodeAt(0).toString(16);
  const path = `${svgPath}0${postId}.svg`;
  return (
    <details>
      <summary>
        {summaryTitle} {id}
      </summary>
      <div className="flex justify-center">
        <Image src={path} alt={postId} width="250" height="250" />
      </div>
    </details>
  );
}
