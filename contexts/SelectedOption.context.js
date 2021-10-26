import { createContext, useContext, useState } from "react";

const SelectedOptionsCtx = createContext();

function SelectedOptionsProvider({ children }) {
  // * TRAINING OPTIONS
  const [trainingOption, setTrainingOption] = useState({
    name: "TSK",
    prices: { perDay: 30 },
  });
  const [accommodationOption, setAccommodationOption] = useState({
    name: "TSK",
    prices: { perDay: 30 },
  });
  const [packageOption, setPackageOption] = useState({
    name: "TSK",
    prices: { perDay: 30 },
  });

  //   * STAY DURATIONS
  const [stayDurationOption, setStayDurationOption] = useState("perDay");
  const [stayDurationLength, setStayDurationLength] = useState(3);

  //   * TOTAL PRICE
  const [total, setTotal] = useState("TSK");

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
    total,
    setTotal,
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
      "useSelectedOption must be used within a SelectedOptionProvider"
    );
  return ctx;
}

export { SelectedOptionsProvider, useSelectedOptions };

// const getTotal = () => {
// 	if (selectedPackageOption)
// 	  setTotal(
// 	    selectedPackageOption.prices[stayDurationOption] * stayDurationLength
// 	  );

// 	if (!selectedPackageOption) {
// 	  const trainingPrice =
// 	    selectedTrainingOption.prices[stayDurationOption] * stayDurationLength;
// 	  // TSK: Create a helper function that takes in the amount of days...
// 	  // and returns the correct number for stayDurationLength depending on the stayDurationOptions...
// 	  // eg: 6days === 6; 12days === 2; 33days === 1;
// 	  const accommPrice =
// 	    selectedAccommodationOption.prices[stayDurationOption] *
// 	    stayDurationLength;

// 	  setTotal(trainingPrice + accommPrice);
// 	}
//       };

// IX_TSK
// 1. Seperate these into smaller Contexts
