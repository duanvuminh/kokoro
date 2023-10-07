import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "lib/service/firestore-repository";
import { googleLogin } from "lib/const/app-text-client-const";

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
    <button className="btn-text float-right" aria-label={cusAriaLabel} onClick={login}>
      {googleLogin}
    </button>
  );
}
