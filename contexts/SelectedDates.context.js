// IX_TSK: This should set the url bar to have the dates if we have dates. . . else remove them

import { createContext, useContext, useState } from "react";

const SelectedDatesCtx = createContext();

function SelectedDatesProvider({ children }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  handleSelectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const value = useMemo(() => ({
    startDate,
    endDate,
    handleSelectDates,
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
