export const convertTimeToDecimal = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  console.log(hours);
  return hours + minutes / 60;
};
