import React from "react";
import { newDecade, newYear } from '../../../utils/util_calendar.js';
import { format } from 'date-fns';

export function SelectMonth(props) {
  const year = newYear(props.selectedDate)();
  const decade = newDecade(props.selectedDate)();

  return (
    <div className={`months-container ${props.showMonths ? '' : 'hidden'}`}>
      <div className="years">
        {decade.map((year, i) =>
          <button
            className='month'
            onClick={() => props.setSelectedDate(year)}
            key={i}
          >
            {format(year, 'Y')}
          </button>
        )}
      </div>
      <div className="months">
        {year.map((month, i) =>
          <button
            className='month'
            onClick={() => props.setSelectedDate(month)}
            key={i}
          >
            {format(month, 'MMMM')}
          </button>
        )}
      </div>
    </div>
  )
}