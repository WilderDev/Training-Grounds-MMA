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
  sub,
  getDaysInMonth,
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
  // IX_TSK: Might have to change this ugly ass thang
  endOfMonth:
    differenceInCalendarDays(
      sub(endOfMonth(new Date()), { days: 2 }),
      endOfMonth(new Date())
    ) > 28
      ? sub(endOfMonth(new Date()), { days: 2 })
      : endOfMonth(new Date()),
  startOfNextMonth: startOfMonth(addMonths(new Date(), +1)),
  endOfNextMonth: sub(endOfMonth(addMonths(new Date(), +1)), {
    days: getDaysInMonth(addMonths(new Date(), +1)) === 31 ? 2 : 1,
  }),
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
  console.log(
    "ranges:",
    ranges.map((range) => {
      console.log("range.startDate:", range.range());
    })
  );
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
  // IX_TSK: Do one for staring next week and next month
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
