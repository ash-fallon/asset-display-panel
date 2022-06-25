export const convertDateToUnix = date => Math.floor(date.getTime() / 1000);

export const convertUnixToDate = unix => {
  const milliseconds = unix * 1000;
  return new Date(milliseconds).toLocaleDateString();
};

export const createDate = (startDate, days, weeks, months, years) => {
  let newDate = new Date(startDate);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
};
