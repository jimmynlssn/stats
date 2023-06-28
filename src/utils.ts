export const dateStringToDate = (dateString: string): Date => {
  
  const dateParts = dateString
    .split('/')
    .map((datePart: string): number => {
      return parseInt(datePart);
    });

  const day = dateParts[0] + 1;
  const month = dateParts[1] - 1;
  const year = dateParts[2];

  return new Date(year, month, day);
};
