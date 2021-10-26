import { createContext, useContext, useState } from "react";

const SelectedOptionCtx = createContext();

function SelectedOptionProvider({ children }) {
  const [trainingOption, setTrainingOption] = useState("TSK");
  const [accommodationOption, setAccommodationOption] = useState("TSK");
  const [packageOption, setPackageOption] = useState("TSK");

  // IX_TSK: Memoize this?
  const value = {
    trainingOption,
    setTrainingOption,
    accommodationOption,
    setAccommodationOption,
    packageOption,
    setPackageOption,
  };

  return (
    <SelectedOptionCtx.Provider value={value}>
      {children}
    </SelectedOptionCtx.Provider>
  );
}

function useSelectedOption() {
  const ctx = useContext(SelectedOptionCtx);

  if (ctx === undefined)
    throw new Error(
      "useSelectedOption must be used within a SelectedOptionProvider"
    );
  return ctx;
}

export { SelectedOptionProvider, useSelectedOption };
