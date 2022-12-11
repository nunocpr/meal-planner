import {
  startOfYear,
  startOfMonth,
  startOfDecade,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  addDays,
  addMonths,
  addYears,
} from 'date-fns';

/* A function that returns a week */

export const newWeek = (start = new Date()) => {
  let date = startOfWeek(startOfDay(start), { weekStartsOn: 1 });

  return function () {
    const week = [...Array(7)].map((_, i) => addDays(date, i));

    date = addDays(week[6], 1);

    return week;
  }
}

/* A function that returns another function that returns a month */

export const newMonth = (start = new Date()) => {
  let month = [];
  let date = start;

  const lastDayOfRange = (arr) => {
    return arr[arr.length - 1][6];
  }

  return function () {
    const weekGen = newWeek(startOfMonth(date));
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));
    month.push(weekGen());

    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    const currentMonth = month;
    month = []
    date = addDays(lastDayOfRange(currentMonth), 1);

    return currentMonth;
  }
}

/* A function that returns another function that returns a year */

export const newYear = (start = new Date()) => {
  let date = startOfYear(startOfMonth(start));

  return function () {
    const month = [...Array(12)].map((_, i) => addMonths(date, i));
    date = addMonths(month[11], 1)

    return month;
  }
}
/* A function that returns another function that returns a decade */

export const newDecade = (start = new Date()) => {
  let date = startOfDecade(startOfYear(start));

  return function () {
    const year = [...Array(5)].map((_, i) => addYears(date, i));

    return year;
  }
}

