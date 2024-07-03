import { Language } from "../types/enums/Language";

export const getLanguageSymbol = (language: Language): string => {
  switch (language) {
    case Language.EN:
      return "en";
    case Language.PL:
      return "pl";
    default:
      return "en";
  }
};
