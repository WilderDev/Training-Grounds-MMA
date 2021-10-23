import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
} from "date-fns";

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfNextWeek: startOfWeek(addDays(new Date(), +7)),
  endOfNextWeek: endOfWeek(addDays(new Date(), +7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfTomorrow: startOfDay(addDays(new Date(), +1)),
  endOfTomorrow: endOfDay(addDays(new Date(), +1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfNextMonth: startOfMonth(addMonths(new Date(), +1)),
  endOfNextMonth: endOfMonth(addMonths(new Date(), +1)),
};

const staticRangeHandler = {
  range: {},
  isSelected(range) {
    const definedRange = this.range();
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    );
  },
};

export function createStaticRanges(ranges) {
  return ranges.map((range) => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: "Today",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Tomorrow",
    range: () => ({
      startDate: defineds.startOfTomorrow,
      endDate: defineds.endOfTomorrow,
    }),
  },
  {
    label: "This Week",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfWeek,
    }),
  },
  {
    label: "Next Week",
    range: () => ({
      startDate: defineds.startOfNextWeek,
      endDate: defineds.endOfNextWeek,
    }),
  },
  {
    label: "This Month",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfMonth,
    }),
  },
  {
    label: "Next Month",
    range: () => ({
      startDate: defineds.startOfNextMonth,
      endDate: defineds.endOfNextMonth,
    }),
  },
]);

export const defaultInputRanges = [
  // TSK: Do one for staring next week and next month
  // {
  //   label: "days starting next week",
  //   range(value) {
  //     return {
  //       startDate: addDays(
  //         defineds.startOfNextWeek,
  //         (Math.max(Number(value), 1), 1) * -1
  //       ),
  //       endDate: defineds.endOfNextWeek,
  //     };
  //   },
  //   getCurrentValue(range) {
  //     if (!isSameDay(range.endDate, defineds.endOfToday)) return "-";
  //     if (!range.startDate) return "∞";
  //     return differenceInCalendarDays(defineds.endOfToday, range.startDate) + 1;
  //   },
  // },
  {
    label: "days starting today",
    range(value) {
      const today = new Date();
      return {
        startDate: today,
        endDate: addDays(today, Math.max(Number(value), 1) - 1),
      };
    },
    getCurrentValue(range) {
      if (!isSameDay(range.startDate, defineds.startOfToday)) return "-";
      if (!range.endDate) return "∞";
      return differenceInCalendarDays(range.endDate, defineds.startOfToday) + 1;
    },
  },
];

export function getStringOfSelectedDays(startDate, endDate) {
  const numDays = differenceInCalendarDays(endDate, startDate) + 1;
  const formattedDays = numDays === 1 ? "1 day" : `${numDays} days`;
  return formattedDays;
}
