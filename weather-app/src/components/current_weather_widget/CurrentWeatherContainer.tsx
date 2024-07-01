import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { getWeatherData } from "../../utils/getWeatherData";
import { CurrentWeather } from "../../types/CurrentWeather";
import { colors } from "../../consts/colors";
import { DegreesContainer } from "./DegreesContainer";
import { LocationText } from "./LocationText";
import { DescriptionText } from "./DescriptionText";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${colors.sky_blue};
  padding-left: 10px;
  padding-right: 10px;
`;

export const CurrentWeatherContainer = (): ReactElement => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData();
        console.log(data);
        setWeather(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading || !weather) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <LocationText
        city={weather.location.name}
        country={weather.location.country}
        lastUpdated={weather.lastUpdated}
      />
      <DegreesContainer
        temperature={weather.degrees}
        icon={weather.icon}
        alt={weather.description}
      />
      <DescriptionText description={weather.description} />
    </StyledContainer>
  );
};
