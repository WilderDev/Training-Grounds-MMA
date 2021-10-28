import { createContext, useContext, useMemo, useState } from "react";
import {
  isDailyRate,
  isMonthlyRate,
  isWeeklyRate,
  isYearlyRate,
} from "../utils/time.helpers";
import { useSelectedOptions } from "./SelectedOption.context";

const ReservationTotalCtx = createContext();

function ReservationTotalProvider({ children }) {
  const [total, setResTotal] = useState();
  const [perUnit, setPerUnitObj] = useState({ amount: 0, unit: "day" });
  const [packagePrice, setPackagePrice] = useState(0);
  const [trainingPrice, setTrainingPrice] = useState(0);
  const [accommodationPrice, setAccommodationPrice] = useState(0);

  const {
    packageOption,
    accommodationOption,
    trainingOption,
    stayDurationOption,
    stayDurationLength,
  } = useSelectedOptions();

  const setPerUnit = () => {
    const unit = stayDurationOption.split("per")[1];
    let amount;

    // PACKAGE OPTION
    if (packageOption) {
      amount = packageOption.prices[stayDurationOption];
      return setPerUnitObj({ amount, unit });
    }

    // TRAINING OPTION & ACCOMMODATION OPTION
    if (trainingOption && accommodationOption) {
      amount =
        trainingOption.prices[stayDurationOption] +
        accommodationOption.prices[stayDurationOption];
      return setPerUnitObj({ amount, unit });
    }

    // ONLY TRAINING OPTION
    if (trainingOption) {
      amount = trainingOption.prices[stayDurationOption];
      return setPerUnitObj({ amount, unit });
    }

    // ONLY ACCOMMODATION OPTION
    if (accommodationOption) {
      amount = accommodationOption.prices[stayDurationOption];
      return setPerUnitObj({ amount, unit });
    }
  };

  const setTotal = () => {
    let multiplyer = 1;

    // Staying less than a week ~ (in days)
    if (isDailyRate(stayDurationLength)) multiplyer = stayDurationLength;
    // Staying one week or more . . . but less than a month ~ (in weeks)
    if (isWeeklyRate(stayDurationLength))
      multiplyer = Math.ceil(stayDurationLength / 7);
    // Staying one month or more . . . but less than a year ~ (in months)
    if (isMonthlyRate(stayDurationLength))
      multiplyer = Math.ceil(stayDurationLength / 29);
    // Staying one year or longer ~ (in years)
    if (isYearlyRate(stayDurationLength))
      multiplyer = Math.ceil(stayDurationLength / 349);

    // PACKAGE OPTION
    if (packageOption) {
      return setResTotal(packageOption.prices[stayDurationOption] * multiplyer);
    }

    // TRAINING OPTION & ACCOMMODATION OPTION
    if (trainingOption && accommodationOption) {
      return setResTotal(
        trainingOption.prices[stayDurationOption] * multiplyer +
          accommodationOption.prices[stayDurationOption] * multiplyer
      );
    }

    // ONLY TRAINING OPTION
    if (trainingOption) {
      return setResTotal(
        trainingOption.prices[stayDurationOption] * multiplyer
      );
    }

    // ONLY ACCOMMODATION OPTION
    if (accommodationOption) {
      return setResTotal(
        accommodationOption.prices[stayDurationOption] * multiplyer
      );
    }
  };

  const value = useMemo(() => ({
    total,
    setTotal,
    perUnit,
    setPerUnit,
  }));

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
