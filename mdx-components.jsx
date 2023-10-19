import Image from "next/image";
import { ButtonTextPart } from "app/component/part";

export function useMDXComponents(components) {
  return { Link: ButtonTextPart, Image, ...components };
}
