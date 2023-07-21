import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "lib/repository";
import { ReactNode } from "react";
import { googleLogin } from "lib/const";

export function GoogleLoginPartClient({
  ariaLabel,
}: {
  ariaLabel?: string;
}): JSX.Element {
  const cusAriaLabel = ariaLabel || "";
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <button className="btn-text" aria-label={cusAriaLabel} onClick={login}>
      {googleLogin}
    </button>
  );
}
