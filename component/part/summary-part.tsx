import Image from "next/image";
import { SvgPath } from "lib/type";

export function SummaryPart({
  pageId,
  children,
}: {
  pageId: string;
  children: any;
}): JSX.Element {
  const id = pageId.charCodeAt(0).toString(16);
  const path = `${SvgPath}0${id}.svg`;
  return (
    <details>
      <summary>Click xem tóm tắt {pageId}</summary>
      <div className="flex">
        <Image src={path} alt={id} width="100" height="100" />
        {children}
      </div>
    </details>
  );
}
