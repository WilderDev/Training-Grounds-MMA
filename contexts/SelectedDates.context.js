// IX_TSK: This should set the url bar to have the dates if we have dates. . . else remove them
import { useRouter } from "next/router";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import {
  getDaysBetweenDates,
  isDailyRate,
  isMonthlyRate,
  isWeeklyRate,
  isYearlyRate,
} from "../utils/time.helpers";
import { toLowerCaseHyphenated } from "../utils/string.helpers";

const SelectedDatesCtx = createContext();

function SelectedDatesProvider({ children }) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [stayDurationOption, setStayDurationOption] = useState("perDay");
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

  const handleSelectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    const days = Math.floor(
      getDaysBetweenDates(ranges.selection.endDate, ranges.selection.startDate)
    );
    setStayDurationLength(days);
  };

  // Save in local sto

  useEffect(() => {
    if (startDate) {
      router.query.startDate = toLowerCaseHyphenated(startDate.toISOString());
    } else {
      delete router.query.startDate;
    }
    router.push(router, undefined, { shallow: true });
  }, [startDate]);

  useEffect(() => {
    if (endDate) {
      router.query.endDate = toLowerCaseHyphenated(endDate.toISOString());
    } else {
      delete router.query.endDate;
    }
    router.push(router, undefined, { shallow: true });
  }, [endDate]);

  const value = useMemo(() => ({
    startDate,
    endDate,
    handleSelectDates,
    stayDurationOption,
    stayDurationLength,
  }));

  return (
    <SelectedDatesCtx.Provider value={value}>
      {children}
    </SelectedDatesCtx.Provider>
  );
}

function useSelectedDates() {
  const ctx = useContext(SelectedDatesCtx);

  if (ctx === undefined)
    throw new Error(
      "useSelectedDates must be used within a SelectedDatesProvider"
    );

  return ctx;
}

export { SelectedDatesProvider, useSelectedDates };

// IX_TSK
// 1. Store dates in local storage object
// 2.
