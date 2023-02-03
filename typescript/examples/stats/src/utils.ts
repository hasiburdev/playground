export const dataStringToDate = (dateString: string): Date => {
  const [month, day, year] = dateString
    .split("/")
    .map((item) => parseInt(item));
  return new Date(month - 1, day, year);
};
