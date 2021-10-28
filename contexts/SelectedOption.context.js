import { createContext, useContext, useState, useEffect } from "react";
import {
  isDailyRate,
  isMonthlyRate,
  isWeeklyRate,
  isYearlyRate,
} from "../utils/time.helpers";

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
    if (packageOption && (trainingOption || accommodationOption)) {
      setPackageOption();
    }
  }, [trainingOption, accommodationOption]);

  //   * STAY DURATIONS
  const [stayDurationOption, setStayDurationOption] = useState("perDay");

  //   TSK: Set this up in all components that use the calendar
  const [stayDurationLength, setStayDurationLength] = useState(1);

  useEffect(() => {
    // Staying less than a week ~ (in days)
    if (isDailyRate(stayDurationLength)) setStayDurationOption("perDay");
    // Staying one week or more . . . but less than a month ~ (in weeks)
    if (isWeeklyRate(stayDurationLength)) setStayDurationOption("perWeek");
    // Staying one month or more . . . but less than a year ~ (in months)
    if (isMonthlyRate(stayDurationLength)) setStayDurationOption("perMonth");
    // Staying one year or longer ~ (in years)
    if (isYearlyRate(stayDurationLength)) setStayDurationOption("perYear");
  }, [stayDurationLength]);

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
