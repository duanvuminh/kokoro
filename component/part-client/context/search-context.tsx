import React from "react";

interface ISearchContext {
  isSearchPage: boolean;
  toggleSearchPage?: (value: boolean) => void;
}

const defaultState = {
  isSearchPage: true,
};

const SearchContext = React.createContext<ISearchContext>(defaultState);

export function SearchProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [isSearchPage, setSearch] = React.useState(defaultState.isSearchPage);
  const toggleSearchPage = (value: boolean) => {
    setSearch(value);
  };
  return (
    <SearchContext.Provider
      value={{
        isSearchPage,
        toggleSearchPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
