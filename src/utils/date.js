// This file configs dayjs with jalaliday plugin to support jalali calendar
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

dayjs.extend(jalaliday);
dayjs.calendar('jalali');

// Here you can add utility functions for dayjs

const toLocalDate = (datetime, format = 'YYYY/M/D') =>
  dayjs(datetime).format(format);

export { toLocalDate };
