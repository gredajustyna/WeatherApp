export const geWeatherDataFromApi = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=London&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
