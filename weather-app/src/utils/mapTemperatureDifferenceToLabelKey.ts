export const mapTemperatureDifferenceToLabelKey = (
  difference: number
): string => {
  switch (difference) {
    case 20:
      return "veryLow";
    case 35:
      return "low";
    case 56:
      return "same";
    case 80:
      return "high";
    case 100:
      return "veryHigh";
    default:
      return "";
  }
};
