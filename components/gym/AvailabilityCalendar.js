import { useState } from "react";
import { getStringOfSelectedDays } from "../../utils/calendar.helpers";
import { locationsToString } from "../../utils/location.helpers";
import { getLocalDateString } from "../../utils/time.helpers";
import DateRangeCalendar from "../minor/DateRangeCalendar";

const AvailabilityCalendar = ({ city, state, country }) => {
  // IX_TSK: These should be gotten in context or router Query
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <section className="responsive">
      <h2 className="font-semibold text-xl sm:text-2xl mb-2">
        {getStringOfSelectedDays(startDate, endDate)} in{" "}
        {locationsToString(city, state, country)}
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        {getLocalDateString(startDate)} - {getLocalDateString(endDate)}
      </p>
      <DateRangeCalendar
        handleSelectDates={handleSelectDates}
        startDate={startDate}
        endDate={endDate}
      />
    </section>
  );
};

export default AvailabilityCalendar;

// IX_TSK
// 1. Send Router Query through link and into this component
// 2. Use the start date and end date previously chosen if they have it in
// 3. Have this update the parents state for price/nights
