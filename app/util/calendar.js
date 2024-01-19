const getFullMonthName = (year, monthIndex) => {
  const date = new Date(year, monthIndex, 1);
  return date.toLocaleString('en-US', { month: 'long' });
};

const indexifyWeekDays = (weekDaysArray) => {
  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return weekDaysArray.map(day=> weekDays.indexOf(day));
}

const generateWeeksInMonth = (month, year) => {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const firstWeekDay = firstDay.getDay();
  const lastDate = lastDay.getDate();
  const weeks = [];

  let currentWeek = Array.from({ length: firstWeekDay }).fill(null);

  for (let day = 1; day <= lastDate; day++) {
    currentWeek.push({ day, date: new Date(year, month - 1, day) });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (0 < currentWeek.length || currentWeek.length > 7) {
    currentWeek = [...currentWeek, ...Array.from({ length: 7 - currentWeek.length }).fill(null)];
    weeks.push(currentWeek);
  }

  return weeks;
};
  
// const year = 2024;
// const month = 8;
// const calendar = generateWeeksInMonth(month, year);
// console.log(calendar);  

export {
  generateWeeksInMonth,
  getFullMonthName,
  indexifyWeekDays,
}