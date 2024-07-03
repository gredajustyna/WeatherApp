import { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { DegreesContainer } from "./DegreesContainer";
import { LocationText } from "./LocationText";
import { DescriptionText } from "./DescriptionText";
import { useWeatherData } from "../../hooks/useWeatherData";

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
  const { weather, loading } = useWeatherData();

  if (loading || !weather) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <LocationText
        city={weather.location.name}
        country={weather.location.country}
        lastUpdated={weather.lastUpdated}
      />
      <DegreesContainer
        temperature={weather.weather.degrees}
        icon={weather.weather.icon}
        alt={weather.weather.description}
      />
      <DescriptionText description={weather.weather.description} />
    </StyledContainer>
  );
};
