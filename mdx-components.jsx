import Image from "next/image";
import { LinkButtonPart } from "component/part";

export function useMDXComponents(components) {
  return { Link: LinkButtonPart, Image, ...components };
}
