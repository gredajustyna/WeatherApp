export const convertTo24HourFormat = (time12h: string): string => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM" && hours !== "12") {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return `${hours.padStart(2, "0")}:${minutes}`;
};
