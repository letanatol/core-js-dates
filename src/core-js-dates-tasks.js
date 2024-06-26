/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 * К прошедшей дате возвращает количество секунд, прошедших с 00:00 01.01.1970.
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  const newDate = new Date(date);

  return newDate.getTime();
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 * Возвращает время в формате чч:мм:сс с даты получения.
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}

/**
 * Returns the name of the day of the week for a given date string.
 * Возвращает имя дня недели для заданной строки даты.
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const objectDate = new Date(date);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const index = objectDate.getDay();

  return days[index];
}

/**
 * Returns the date of the next Friday from a given date.
 * Возвращает дату следующей пятницы с заданной даты.
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const objectDate = new Date(date);
  const index = objectDate.getDay();
  const friday = 5;
  const indexToFriday =
    friday - index <= 0 ? 7 + friday - index : friday - index;

  objectDate.setDate(objectDate.getDate() + indexToFriday);
  return objectDate;
}

/**
 * Returns the number of days in a specified month and year.
 * Возвращает количество дней в указанном месяце и году.
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 * Возвращает общее количество дней между двумя датами, включая даты начала и окончания.
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const startObjectDate = new Date(dateStart);
  const endObjectDate = new Date(dateEnd);

  const difference = endObjectDate - startObjectDate;
  const milliseconds = 1000;
  const seconds = 60;
  const minutes = 60;
  const hours = 24;
  const millisecondsPerDay = milliseconds * seconds * minutes * hours;
  const countDays = Math.round(difference / millisecondsPerDay);

  return countDays + 1;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 * Возвращает значение true, если данная дата находится в заданном диапазоне, включая даты начала и окончания.
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const currentDate = new Date(date);
  const startObjectDate = new Date(period.start);
  const endObjectDate = new Date(period.end);

  if (currentDate >= startObjectDate && currentDate <= endObjectDate) {
    return true;
  }
  return false;
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 * Возвращает дату, отформатированную в M/D/YYYY, hh:mm:ss a'.
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const objectDate = new Date(date);
  const year = objectDate.getFullYear();
  const month = objectDate.getMonth() + 1;
  const day = objectDate.getDate();
  const hours = objectDate.getHours();
  const hour = hours % 12 || 12;
  const minutes = objectDate.getMinutes();
  const seconds = objectDate.getSeconds();
  const meridiem = hours >= 12 ? 'PM' : 'AM';

  const formattedString = `${month}/${day}/${year}, ${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${meridiem}`;

  return formattedString;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 * Возвращает общее количество выходных дней (субботы и воскресенья) в указанный месяц и год.
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const startObjectDate = new Date(year, month - 1, 1);
  const endObjectDate = new Date(year, month, 0);
  let count = 0;

  for (
    let i = startObjectDate;
    i <= endObjectDate;
    i.setDate(i.getDate() + 1)
  ) {
    if (i.getDay() === 0 || i.getDay() === 6) {
      count += 1;
    }
  }

  return count;
}

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 * The first day of the week is Monday.
 * Возвращает номер недели года для данной даты.
 * Первая неделя приходится на 1 января.
 * Первый день недели - понедельник.
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const objectDate = new Date(date);
  const firstJanuary = new Date(objectDate.getFullYear(), 0, 1);
  const indexFirstJanuary = firstJanuary.getDay();
  const millisecondsInOneDay = 86400000;
  const daysWeek = 7;

  let beforeFirstMonday;
  if (indexFirstJanuary > 0) {
    beforeFirstMonday =
      firstJanuary.getTime() +
      (daysWeek - indexFirstJanuary) * millisecondsInOneDay;
  } else {
    beforeFirstMonday = firstJanuary.getTime();
  }

  const accountPeriod = objectDate - beforeFirstMonday;
  const milliseconds = 1000;
  const seconds = 60;
  const minutes = 60;
  const hours = 24;

  const millisecondsPerWeek =
    milliseconds * seconds * minutes * hours * daysWeek;
  const weeksPassed = Math.ceil(accountPeriod / millisecondsPerWeek);
  const weekNumber = weeksPassed + 1;

  return weekNumber;
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 * Возвращает дату следующей пятницы 13 от заданной даты.
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  const startObjectDate = new Date(date);
  const indexFriday = 5;

  for (let i = startObjectDate.getMonth(); i < 12; i += 1) {
    const day13 = new Date(startObjectDate.getFullYear(), i, 13);

    if (day13.getDay() === indexFriday) {
      return day13;
    }
  }

  startObjectDate.setFullYear(startObjectDate.getFullYear() + 1);

  return getNextFridayThe13th(startObjectDate);
}

/**
 * Returns the quarter of the year for a given date.
 * Возвращает квартал года за заданную дату.
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const indexMonth = date.getMonth();

  const quarter = Math.floor(indexMonth / 3) + 1;

  return quarter;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 * Формирует график работы работника в заданном диапазоне дат, основываясь на графике рабочих и выходных дней.
 * Даты начала и окончания периода включены.
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */

function getWorkSchedule(period, countWorkDays, countOffDays) {
  const arrayStart = period.start.split('-');
  const arrayEnd = period.end.split('-');

  const start = new Date(arrayStart[2], arrayStart[1] - 1, arrayStart[0]);
  const end = new Date(arrayEnd[2], arrayEnd[1] - 1, arrayEnd[0]);

  const result = [];
  const currentObjectDate = new Date(start);

  while (currentObjectDate <= end) {
    for (let i = 0; i < countWorkDays && currentObjectDate <= end; i += 1) {
      const day = currentObjectDate.getDate().toString().padStart(2, '0');
      const month = (currentObjectDate.getMonth() + 1)
        .toString()
        .padStart(2, '0');

      const year = currentObjectDate.getFullYear();

      result.push(`${day}-${month}-${year}`);

      currentObjectDate.setDate(currentObjectDate.getDate() + 1);
    }

    for (let i = 0; i < countOffDays && currentObjectDate <= end; i += 1) {
      currentObjectDate.setDate(currentObjectDate.getDate() + 1);
    }
  }

  return result;
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 * Определяет, является ли год в указанную дату високосным годом.
 * Високосный год - год, делящийся на 4, но не на 100, если только он не делится на 400.
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const year = date.getFullYear();

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
