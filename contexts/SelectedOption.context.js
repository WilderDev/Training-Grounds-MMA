import { createContext, useContext, useState, useEffect } from "react";

const SelectedOptionsCtx = createContext();

function SelectedOptionsProvider({ children }) {
  // * TRAINING OPTIONS
  const [trainingOption, setTrainingOption] = useState();
  const [accommodationOption, setAccommodationOption] = useState();
  const [packageOption, setPackageOption] = useState();

  useEffect(() => {
    if (packageOption) {
      setTrainingOption();
      setAccommodationOption();
    }
  }, [packageOption]);

  useEffect(() => {
    if ((packageOption && trainingOption) || accommodationOption) {
      setPackageOption();
    }
  }, [trainingOption, accommodationOption]);

  //   * STAY DURATIONS
  const [stayDurationOption, setStayDurationOption] = useState("perDay");

  //   TSK: Set this up in all components that use the calendar
  const [stayDurationLength, setStayDurationLength] = useState(3);

  // IX_TSK: Memoize this?
  const value = {
    trainingOption,
    setTrainingOption,
    accommodationOption,
    setAccommodationOption,
    packageOption,
    setPackageOption,
    stayDurationOption,
    setStayDurationOption,
    stayDurationLength,
    setStayDurationLength,
  };

  return (
    <SelectedOptionsCtx.Provider value={value}>
      {children}
    </SelectedOptionsCtx.Provider>
  );
}

function useSelectedOptions() {
  const ctx = useContext(SelectedOptionsCtx);

  if (ctx === undefined)
    throw new Error(
      "useSelectedOptions must be used within a SelectedOptionsProvider"
    );
  return ctx;
}

export { SelectedOptionsProvider, useSelectedOptions };

// IX_TSK
// 1. Seperate these into smaller Contexts
