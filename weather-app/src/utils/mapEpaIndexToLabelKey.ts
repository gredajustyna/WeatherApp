export const mapEpaIndexToLabelKey = (index: number): string => {
  switch (index) {
    case 1:
      return "good";
    case 2:
      return "moderate";
    case 3:
      return "unhealthy1";
    case 4:
      return "unhealthy2";
    case 5:
      return "veryUnhealthy";
    case 6:
      return "hazardous";
    default:
      return "";
  }
};
