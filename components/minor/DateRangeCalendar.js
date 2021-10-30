import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useSelectedDates } from "../../contexts/SelectedDates.context";
import {
  defaultInputRanges,
  defaultStaticRanges,
} from "../../utils/calendar.helpers";

const DateRangeCalendar = () => {
  const { startDate, endDate, handleSelectDates } = useSelectedDates();
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        disabledDates={[new Date().getDate() - 1]}
        rangeColors={["#ef4444"]}
        onChange={handleSelectDates}
        staticRanges={defaultStaticRanges}
        inputRanges={defaultInputRanges}
      />

      <p className="text-right text-xs -mt-2 font-light text-gray-600">
        *Months are 29 days.
      </p>
    </>
  );
};

export default DateRangeCalendar;
