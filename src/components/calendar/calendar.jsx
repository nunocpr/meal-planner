import React from "react";
import './calendar.css'
import { newWeek, newMonth } from '../../utils/util_calendar.js';
import { format, isSameMonth } from 'date-fns';

export const Calendar = () => {
  const data = newMonth(new Date())();
  const week = newWeek(new Date())();

  console.log()
  function MonthlyTableHead() {
    const weekDays = week.map(day => format(day, 'EEE'))
    return (
      <thead>
        <tr className='table-head-row'>
          {
            weekDays.map(dayName =>
              <th className="week-day" key={dayName}>
                {dayName}
              </th>
            )
          }
        </tr>
      </thead>
    )
  }

  function MonthlyTableBody() {

    const dayColor = (day) => {
      if (!isSameMonth(day, new Date())) {
        return 'different-month'
      } else {
        return 'current-month';
      }
    }

    return (
      <tbody>
        {data.map(week =>
          <tr className="week-row" key={week}>
            {
              week.map(day =>
                <td className={`day ${dayColor(day)}`} key={day}>
                  {format(day, "dd")}
                </td>
              )
            }
          </tr>
        )}
      </tbody>
    )
  }

  return (
    <>
      <div>
        Calendar
      </div>
      <table className="week-days">
        <MonthlyTableHead />
        <MonthlyTableBody />
      </table>
    </>
  )

}