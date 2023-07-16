import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "lib/repository";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useSearch } from "./context/app-context";

export function GoogleLoginPartClient({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel?: string;
}): JSX.Element {
  const router = useRouter();
  const { setToken } = useSearch();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken();
      setToken!(token);
      router.push("/");
    }
  });
  const cusAriaLabel = ariaLabel || "";
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <button className="btn-text" aria-label={cusAriaLabel} onClick={login}>
      {children}
    </button>
  );
}
