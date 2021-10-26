import { createContext, useContext, useState } from "react";
import { useSelectedOptions } from "./SelectedOption.context";

const ReservationTotalCtx = createContext();

function ReservationTotalProvider({ children }) {
  const [total, setResTotal] = useState();
  const [perUnit, setPerUnitObj] = useState({ amount: 0, unit: "day" });

  const {
    packageOption,
    accommodationOption,
    trainingOption,
    stayDurationOption,
    stayDurationLength,
  } = useSelectedOptions();

  const setPerUnit = () => {
    if (packageOption) {
      setPerUnitObj({
        amount: packageOption.prices[stayDurationOption],
        unit: stayDurationOption.split("per")[1],
      });
    }

    if (trainingOption && accommodationOption) {
      setPerUnitObj({
        amount: trainingOption.prices[stayDurationOption],
        unit: stayDurationOption.split("per")[1],
      });
    }
  };

  const setTotal = () => {
    //     TSK: This will not work for longer than a week.
    // TSK: Create a helper function that takes in the amount of days...
    // and returns the correct number for stayDurationLength depending on the stayDurationOptions...
    // eg: 6days === 6; 12days === 2; 33days === 1;
    if (packageOption) {
      setResTotal(
        packageOption.prices[stayDurationOption] * stayDurationLength
      );
    }

    if (trainingOption && accommodationOption) {
      const trainingPrice =
        trainingOption.prices[stayDurationOption] * stayDurationLength;
      const accommPrice =
        accommodationOption.prices[stayDurationOption] * stayDurationLength;

      setResTotal(trainingPrice + accommPrice);
    }
  };

  // IX_TSK: Memoize this?
  const value = {
    total,
    setTotal,
    perUnit,
    setPerUnit,
  };

  return (
    <ReservationTotalCtx.Provider value={value}>
      {children}
    </ReservationTotalCtx.Provider>
  );
}

function useReservationTotal() {
  const ctx = useContext(ReservationTotalCtx);

  if (ctx === undefined)
    throw new Error(
      "useReservationTotal must be used within a ReservationTotalProvider"
    );
  return ctx;
}

export { ReservationTotalProvider, useReservationTotal };
