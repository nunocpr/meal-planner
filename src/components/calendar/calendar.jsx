import { React, useState } from "react";
import { Caption } from './caption';
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import { SelectMonth } from "./selectMonth";
import { format } from 'date-fns';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()),
    [showMonths, setShowMonths] = useState(false),
    currentDay = new Date(),
    handleToggle = () => setShowMonths(!showMonths)

  return (
    <div className="calendar-container">
      <h1>
        Sooper
      </h1>

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