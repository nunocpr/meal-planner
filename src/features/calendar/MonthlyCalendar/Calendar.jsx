import React, { useState } from "react";
import { Caption } from './Caption';
import { SelectMonth } from "./SelectMonth";
import Table from "./Table.jsx";
import WeeklyCalendar from "./WeeklyCalendar";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()),
    [showMonths, setShowMonths] = useState(false),
    currentDay = new Date(),
    handleToggle = () => setShowMonths(!showMonths);

  return (
    <div className="monthly-calendar-container">

      <div className="calendar-background">

        <Caption
          handleToggle={handleToggle}
          selectedDate={selectedDate}
        />

        <SelectMonth
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showMonths={showMonths}
        />

        <Table
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentDay={currentDay}
        />

        <WeeklyCalendar
          selectedDate={selectedDate}
        />
      </div>
    </div>
  )

}

export default Calendar;