export const getPercentageFromTemperatureDifference = (
  difference: number
): number => {
  switch (true) {
    case difference <= -5:
      return 20;
    case difference > -5 && difference < 0:
      return 35;
    case difference === 0:
      return 56;
    case difference > 0 && difference <= 5:
      return 80;
    case difference > 5:
      return 100;
    default:
      return 50;
  }
};
