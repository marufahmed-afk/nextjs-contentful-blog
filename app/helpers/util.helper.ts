import { format } from 'date-fns';

export const formattedDate = (date: string) => {
  let formatString = 'PPP';
  let _date = new Date(date);
  return format(_date, formatString);
};

export const findHeaderSize = (level: number): string => {
  switch (level) {
    case 1:
      return 'text-5xl';
    case 2:
      return 'text-4xl';
    case 3:
      return 'text-3xl';
    case 4:
      return 'text-2xl';
    case 5:
      return 'text-xl';
    case 6:
      return 'text-lg';
    default:
      return 'text-base';
  }
};

export const findBodySize = (level: number): string => {
  switch (level) {
    case 1:
      return 'text-sm';
    case 2:
      return 'text-lg';
    default:
      return 'text-base';
  }
};
