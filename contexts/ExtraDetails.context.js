import { createContext, useContext, useMemo, useState } from "react";

const ExtraDetailsCtx = createContext();

function ExtraDetailsProvider({ children }) {
  const [numFighters, setNumFighters] = useState(1);

  const value = useMemo(() => ({
    numFighters,
    setNumFighters,
  }));

  return (
    <ExtraDetailsCtx.Provider value={value}>
      {children}
    </ExtraDetailsCtx.Provider>
  );
}

function useExtraDetails() {
  const ctx = useContext(ExtraDetailsCtx);

  if (ctx === undefined)
    throw new Error("useExtraDetails must be used with a ExtraDetailsProvider");

  return ctx;
}

export { ExtraDetailsProvider, useExtraDetails };
