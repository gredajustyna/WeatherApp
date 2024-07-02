import styled from "styled-components";
import { colors } from "../../consts/colors";
import { ReactElement } from "react";
import { HourContainer } from "./HourContainer";
import { Line, LineChart } from "recharts";
import { useForecastData } from "../../hooks/useForecastData";

const StyledContainer = styled.div`
  border-radius: 12px;
  position: relative;
  height: 20vh;
  width: 75vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${colors.sky_blue};
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: auto;
`;

const ChartContainer = styled.div`
  position: absolute;
  width: fit-content;
  top: 20px;
  left: 30px;
  z-index: 2;
`;

export const ForecastContainer = (): ReactElement => {
  const { forecast, loading } = useForecastData();

  if (loading || !forecast) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <ChartContainer>
        <LineChart
          width={1500}
          height={200}
          data={forecast.futureWeather
            .filter((hour) => new Date(hour.time) > new Date())
            .slice(0, 24)}
        >
          <Line type="monotone" dataKey="degrees" stroke="#ffffff" />
        </LineChart>
      </ChartContainer>

      {forecast.futureWeather
        .filter((hour) => new Date(hour.time) > new Date())
        .map((hour) => (
          <HourContainer
            hour={hour.time.split(" ")[1]}
            temperature={hour.degrees}
            icon={hour.icon}
            rain={0}
          />
        ))
        .slice(0, 24)}
    </StyledContainer>
  );
};