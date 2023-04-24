import Image from "next/image";
import { SvgPath } from "lib/type";

export function SummaryPart({
  postId,
  children,
}: {
  postId: string;
  children: any;
}): JSX.Element {
  const id = postId.charCodeAt(0).toString(16);
  const path = `${SvgPath}0${id}.svg`;
  return (
    <details>
      <summary>Click xem tóm tắt {postId}</summary>
      <div className="flex">
        <Image src={path} alt={id} width="250" height="250" />
        <div>{children}</div>
      </div>
    </details>
  );
}
