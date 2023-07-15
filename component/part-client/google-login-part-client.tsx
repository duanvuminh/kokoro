import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "lib/repository";
import { ReactNode } from "react";

export function GoogleLoginPartClient({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel?: string;
}): JSX.Element {
  const cusAriaLabel = ariaLabel || "";
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(
        (error: {
          code: any;
          message: any;
          customData: { email: any };
          name: string;
        }) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }
      );
  };
  return (
    <button className="btn-text" aria-label={cusAriaLabel} onClick={login}>
      {children}
    </button>
  );
}
