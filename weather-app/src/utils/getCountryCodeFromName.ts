import { countries } from "../consts/countries";

export const getCountryCodeFromName = (country: string): string => {
  for (const [code, name] of Object.entries(countries)) {
    if (name === country) {
      return code;
    }
  }
  return "";
};
