import { WeatherLocation } from "../types/Location";

export const getSearchData = async (
  searchText: string
): Promise<WeatherLocation[]> => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?q=${searchText}&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
