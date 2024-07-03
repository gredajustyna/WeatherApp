export const mapUVIndexToLabelKey = (index: number): string => {
  switch (true) {
    case index <= 2:
      return "low";
    case index > 2 && index <= 5:
      return "moderate";
    case index > 5 && index <= 7:
      return "high";
    case index > 7 && index <= 10:
      return "veryHigh";
    case index > 10:
      return "extreme";
    default:
      return "";
  }
};
