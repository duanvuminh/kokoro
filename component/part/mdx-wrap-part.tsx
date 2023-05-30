export function MdxWrapPart({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <div className="prose max-w-4xl">{children}</div>;
}
