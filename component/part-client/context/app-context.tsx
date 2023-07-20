import { onAuthStateChanged } from "firebase/auth";
import { auth } from "lib/repository";
import React from "react";

interface IAppContext {
  //Show header left close button
  isSearchPage: boolean;
  // N1,N2
  level: number;
  // token login
  token: string;
  isLoginPage: boolean;
  toggleSearchPage?: (value: boolean) => void;
  setLevel?: (value: number) => void;
  setToken?: (value: string) => void;
  setLoginPage?: (value: boolean) => void;
}

const defaultState = {
  isSearchPage: false,
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
  const [isLoginPage, setLoginPage] = React.useState(defaultState.isLoginPage);
  const [isSearchPage, toggleSearchPage] = React.useState(
    defaultState.isSearchPage
  );
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken();
      setToken!(token);
    }
  });
  return (
    <AppContext.Provider
      value={{
        isSearchPage,
        level,
        token,
        isLoginPage,
        toggleSearchPage,
        setLevel,
        setToken,
        setLoginPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
