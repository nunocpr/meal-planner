import React from "react";
import { format } from 'date-fns';
import { newWeek } from "../../../utils/util_calendar";

export const WeeklyCalendar = (props) => {

  const week = newWeek(props.selectedDate)();
  const weekDays = week.map(day =>
    format(day, 'dd/MM'))
    .map(dayName =>
      <li
        key={dayName}
      >
        <p className="day-of-the-week">{dayName}</p>
        <div className="meals">
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
      </li>
    );

  return (
    <div className="weekly-calendar-container">
      <div className="calendar-background">
        <ul className="week-days">
          {weekDays}
        </ul>
      </div>
    </div>
  )

}

export default WeeklyCalendar;