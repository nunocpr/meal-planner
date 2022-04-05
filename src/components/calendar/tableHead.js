import React from "react";
import { format } from 'date-fns';
import { newWeek } from "../../utils/util_calendar";

export function TableHead(props) {

  const week = newWeek(props.selectedDate)();
  const weekDays = week.map(day =>
    format(day, 'EEE'))
    .map(dayName =>
      <th
        className="week-day-name"
        key={dayName}
      >
        {dayName}
      </th>
    );

  return (
    <thead>
      <tr className='day-name-row'>
        {weekDays}
      </tr>
    </thead>
  )
}