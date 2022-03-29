import { 
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth
} from 'date-fns';

function Calendar() {
  const selectedDate = new Date();
  const startDate = startOfWeek(startOfMonth(selectedDate));
  const endDate = endOfWeek(endOfMonth(selectedDate));


}

export {Calendar};