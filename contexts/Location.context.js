import { createContext, useContext, useMemo, useState } from "react";

const LocationCtx = createContext();

function LocationProvider({ children }) {
  //   +TSK

  const value = useMemo(() => ({
    //    TSK
  }));

  return <LocationCtx.Provider value={value}>{children}</LocationCtx.Provider>;
}

function useLocation() {
  const ctx = useContext(LocationCtx);

  if (ctx === undefined)
    throw new Error("useLocation must be used with a LocationProvider");

  return ctx;
}

export { LocationProvider, useLocation };
