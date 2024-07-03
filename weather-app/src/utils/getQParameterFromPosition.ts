export const getQParameterFromPosition = (
  latitude: number,
  longitude: number
): string => {
  return `${latitude},${longitude}`;
};
