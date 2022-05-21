export const parseDate = (date = new Date()) => {
  return new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });
};

// export const unParseDate = (dateString) => {
// console.log('dateString', dateString);
// let date = dateString.split('-');
// return new Date(date[1], date[2], date[0]);
// };
