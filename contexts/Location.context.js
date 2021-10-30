import { createContext, useContext, useMemo, useState } from "react";

const LocationCtx = createContext();

function LocationProvider({ children }) {
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [zipcode, setZipcode] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const value = useMemo(() => ({
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    zipcode,
    setZipcode,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
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

// IX_TSK
// 1. Think about if this is really necissary . . . I mean... are we using the location in any other components? Why does this need to be global? => Search Page && InividualPage for nearbyResults
