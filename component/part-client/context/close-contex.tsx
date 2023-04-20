"use client";

import React from "react";

const CloseContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function CloseProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [close, setClose] = React.useState(false);
  return (
    <CloseContext.Provider value={[close, setClose]}>
      {children}
    </CloseContext.Provider>
  );
}

export function useClose() {
  const context = React.useContext(CloseContext);
  if (context === undefined) {
    throw new Error("useClose must be used within a CloseProvider");
  }
  return context;
}
