import { convertTo12HourFormat } from "./convertTo12HourFormat";

export const formatDateAndTimeText = (text: string): string => {
  const splittedText = text.split(" ");
  const hour = splittedText[1];
  const convertedHour = convertTo12HourFormat(hour);
  const formattedArray = [splittedText[0], convertedHour];
  return formattedArray.join(" ");
};
