import { ReactElement, useContext } from "react";
import { DegreesContainer } from "./DegreesContainer";
import { LocationText } from "./LocationText";
import { DescriptionText } from "./DescriptionText";
import { WeatherContext } from "../../pages/MainPage";
import { Container } from "../shared/Container";

export const CurrentWeatherContainer = (): ReactElement => {
  const { weather } = useContext(WeatherContext);
  return (
    <Container>
      <LocationText
        city={weather.location.name}
        country={weather.location.country}
        lastUpdated={weather.lastUpdated}
        localTime={weather.location.localtime}
      />
      <DegreesContainer
        temperature={weather.weather.degrees}
        icon={weather.weather.icon}
        alt={weather.weather.description}
      />
      <DescriptionText description={weather.weather.description} />
    </Container>
  );
};
