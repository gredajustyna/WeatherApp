export const convertTo12HourFormat = (time24h: string): string => {
  let [hours, minutes] = time24h.split(":").map(Number);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};
