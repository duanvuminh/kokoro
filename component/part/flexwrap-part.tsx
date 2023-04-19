export function FlexwrapPart({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element {
  return (
    <div className="flex flex-wrap">
      {children.map((item: JSX.Element) => item)}
    </div>
  );
}
