import React from "react";
import { newYear } from '../../utils/util_calendar.js';
import { format } from 'date-fns';

export function SelectMonth(props) {
  const year = newYear(props.selectedDate)();

  return (
    <div className={`months-container ${props.showMonths ? '' : 'hidden'}`}>
      {year.map(month =>
        <div className='month'>
          {format(month, 'MMMM')}
        </div>
      )}
    </div>
  )
}