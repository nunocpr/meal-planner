import React, { useState } from "react";
import { Caption } from './Caption';
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { SelectMonth } from "./SelectMonth";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()),
    [showMonths, setShowMonths] = useState(false),
    currentDay = new Date(),
    handleToggle = () => setShowMonths(!showMonths);

  return (
    <div className="calendar-container">

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

        <table>

          <TableHead
            selectedDate={selectedDate}
          />

          <TableBody
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentDay={currentDay}
          />

        </table>

      </div>
    </div>
  )

}

export default Calendar