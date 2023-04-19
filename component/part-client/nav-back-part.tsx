import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Blank } from "component/part";
import { useClose } from "./context/couter-contex";

export function ClosekPart(): JSX.Element {
  const router = useRouter();
  const [count] = useClose();
  
  const onClick = (event: { target: any }) => {
    router.back();
  };
  
  return count ? (
    <button onClick={onClick} aria-label="go previous page">
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
  let [count, setCount] = useClose();
  useEffect(() => {
    setCount(true);
    return () => {
      setCount(false);
    };
  },[]);
  return <Blank/>;
}
