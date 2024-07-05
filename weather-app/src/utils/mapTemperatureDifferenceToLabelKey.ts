export const mapTemperatureDifferenceToLabelKey = (
  difference: number
): string => {
  console.log(difference);
  switch (difference) {
    case 20:
      return "veryLow";
    case 35:
      return "low";
    case 56:
      return "same";
    case 65:
      return "high";
    case 100:
      return "veryHigh";
    default:
      return "";
  }
};
