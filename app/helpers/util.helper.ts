import { format } from 'date-fns';

export const formattedDate = (date: string) => {
  let formatString = 'PPP';
  let _date = new Date(date);
  return format(_date, formatString);
};
