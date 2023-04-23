export function MdxWrap({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <div className="prose">{children}</div>;
}
