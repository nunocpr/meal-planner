import React from "react";
import Calendar from '../../features/calendar/MonthlyCalendar/Calendar';
import WeeklyCalendar from '../../features/calendar/MonthlyCalendar/WeeklyCalendar';

export const CalendarPage = () => {

  return (
    <div className="main-container">
      <h1>Calendar</h1>
      <Calendar />
    </div>
  )
}

export default CalendarPage;