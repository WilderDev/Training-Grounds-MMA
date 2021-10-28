import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  defaultInputRanges,
  defaultStaticRanges,
} from "../../utils/calendar.helpers";

const DateRangeCalendar = ({ handleSelectDates, startDate, endDate }) => {
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      minDate={new Date()}
      disabledDates={[new Date().getDate() - 1]}
      rangeColors={["#ef4444"]}
      onChange={handleSelectDates}
      staticRanges={defaultStaticRanges}
      inputRanges={defaultInputRanges}
    />
  );
};

export default DateRangeCalendar;
