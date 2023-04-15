import Image from "next/image";
import { SvgPath } from "lib/type";
import { FlexwrapPart } from "lib/part";

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
      <FlexwrapPart>
        <Image src={path} alt={id} width="200" height="200" />
        {children}
      </FlexwrapPart>
    </details>
  );
}
