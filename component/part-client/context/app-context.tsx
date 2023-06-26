import React from "react";

interface IAppContext {
  //Show header left close button
  isSearchPage: boolean;
  // N1,N2
  level: number;
  toggleSearchPage?: (value: boolean) => void;
  setLevel?: (value: number) => void;
}

const defaultState = {
  isSearchPage: true,
  level: 0,
};

const AppContext = React.createContext<IAppContext>(defaultState);

export function AppProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [isSearchPage, toggleSearchPage] = React.useState(
    defaultState.isSearchPage
  );
  const [level, setLevel] = React.useState(defaultState.level);
  return (
    <AppContext.Provider
      value={{
        isSearchPage,
        level,
        toggleSearchPage,
        setLevel,
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
