import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { getWeatherData } from "../../utils/getWeatherData";
import { CurrentWeather } from "../../types/CurrentWeather";
import { colors } from "../../consts/colors";
import { NumberContainer } from "./NumberContainer";
import { GradientContainer } from "./GradientContainer";
import { TitleComponent } from "../shared/ContainerTitle";
import { mapUVIndexToLabel } from "../../utils/mapUVIndexToLabel";
import { Degrees } from "../../types/enums/Degrees";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 34vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 100px + 20vh;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${colors.sky_blue};
  padding-left: 10px;
  padding-right: 10px;
`;

const TitleContainer = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UVIndexContainer = (): ReactElement => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(Degrees.CELSIUS);
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
      <TitleContainer>
        <TitleComponent value="UV Index" />
      </TitleContainer>
      <ValueContainer>
        <GradientContainer index={weather.weather.uvIndex} />
        <NumberContainer index={weather.weather.uvIndex} />
      </ValueContainer>
      <TitleComponent value={mapUVIndexToLabel(weather.weather.uvIndex)} />
    </StyledContainer>
  );
};
