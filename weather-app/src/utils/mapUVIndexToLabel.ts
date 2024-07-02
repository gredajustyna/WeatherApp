export const mapUVIndexToLabel = (index: number): string => {
  switch (true) {
    case index <= 2:
      return "Low";
    case index > 2 && index <= 5:
      return "Moderate";
    case index > 5 && index <= 7:
      return "High";
    case index > 7 && index <= 10:
      return "Very high";
    case index > 10:
      return "Extreme";
    default:
      return "";
  }
};
