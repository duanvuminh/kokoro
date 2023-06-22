export function MdxWrapPart({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <article className="prose">{children}</article>;
}
