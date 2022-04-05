import { React, useState, useEffect } from "react";
import './calendar.css';
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import { SelectMonth } from "./selectMonth";
import { TiArrowSortedDown } from 'react-icons/ti'
import { format } from 'date-fns';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showMonths, setShowMonths] = useState(false);
  const currentDay = new Date();

  function handleToggle() {
    setShowMonths(!showMonths);
  }

  return (
    <div className="calendar-container">
      <h1>
        Sooper
      </h1>
      <div className="calendar-background">

        <div className="caption">
          {format(selectedDate, 'MMMM')} {format(selectedDate, 'Y')}
          <button
            type="button"
            onClick={handleToggle}
          >
            <TiArrowSortedDown />
          </button>
        </div>
        <SelectMonth
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showMonths={showMonths}
        />

        <table>
          <TableHead selectedDate={selectedDate} />
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