import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Blank } from "component/part";
import { useClose } from "./context/close-contex";

export function ClosePart(): JSX.Element {
  const { back } = useRouter();
  const [close] = useClose();
  
  const onClick = (event: { target: any }) => {
    back();
  };
  
  return close ? (
    <button onClick={onClick} aria-label="go previous page" className="visible md:invisible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-6 h-6 stroke-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  ) : <Blank/>;
}

export function EnableNavBackPart(): JSX.Element {
  const [, setClose] = useClose();
  useEffect(() => {
    setClose(true);
    return () => setClose(false);
  });
  return <Blank/>;
}
