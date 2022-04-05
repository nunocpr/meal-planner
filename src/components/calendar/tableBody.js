import React from "react";
import { format, isSameDay, isSameMonth } from 'date-fns';
import { newMonth } from "../../utils/util_calendar";

export function TableBody(props) {

  /* Chainging the color of the day, depending if it is: */

  /* a day from a different Month */
  const selectedDayColor = (day) => {
    if (!isSameMonth(day, props.selectedDate)) {
      return 'different-month';
    }

    if (isSameDay(day, props.selectedDate)) {
      return 'selected-day';
    }
  }

  /* the current day of the month (today) */

  const currentDayColor = (day) => {
    if (isSameDay(day, props.currentDay)) {
      return 'current-day';
    }
  }

  const month = newMonth(props.selectedDate)();

  /* return each week in a 'tr' and each day in a 'td' with clicking functionality to change the day on each 'td' */
  const daysOfTheMonth = month.map(week =>
    <tr
      className="week-row"
      key={week}
    >
      {
        week.map(day =>
          <td
            onClick={() => props.setSelectedDate(day)}
            className={`day ${selectedDayColor(day)}
            ${currentDayColor(day)}`}
            key={day}
          >
            {format(day, "dd")}
          </td>
        )
      }
    </tr>
  );

  return (
    <tbody>
      {daysOfTheMonth}
    </tbody>
  )
}