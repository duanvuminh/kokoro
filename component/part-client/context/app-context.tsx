import { onAuthStateChanged } from "firebase/auth";
import { level_local_storage } from "lib/const/app-text-client-const";
import { auth } from "lib/repository/firestore-repository";
import React, { useEffect } from "react";

interface IAppContext {
  //Show header left close button
  showCloseButton: boolean;
  // N1,N2
  level: number;
  // token login
  token: string;
  setShowCloseButton?: (value: boolean) => void;
  setLevel?: (value: number) => void;
  setToken?: (value: string) => void;
}

const defaultState = {
  showCloseButton: false,
  level: 0,
  token: "",
  isLoginPage: false,
};

const AppContext = React.createContext<IAppContext>(defaultState);

export function AppProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [level, setLevel] = React.useState(defaultState.level);
  const [token, setToken] = React.useState(defaultState.token);
  const [showCloseButton, setShowCloseButton] = React.useState(
    defaultState.showCloseButton
  );
  useEffect(() => {
    const localLevel =
      parseInt(localStorage.getItem(level_local_storage) ?? "0");
    setLevel(localLevel);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setToken!(token);
      } else {
        setToken!("");
      }
    });
    return () => {};
  }, []);
  return (
    <AppContext.Provider
      value={{
        showCloseButton,
        level,
        token,
        setShowCloseButton,
        setLevel,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
