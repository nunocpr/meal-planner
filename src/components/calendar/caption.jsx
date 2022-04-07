import React from "react";
import { format } from 'date-fns';
import { TiArrowSortedDown } from 'react-icons/ti';


export function Caption(props) {

  return (
    <div className="caption-container">
      
      <div className="caption">
        {format(props.selectedDate, 'MMMM')} {format(props.selectedDate, 'Y')}
      </div>

      <button
        type="button"
        onClick={props.handleToggle}
      >
        <TiArrowSortedDown />
      </button>

    </div>
  )
}