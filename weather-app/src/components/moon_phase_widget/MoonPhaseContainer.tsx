import React, { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { useWeatherData } from "../../hooks/useWeatherData";
import { getMoonIconFromMoonPhase } from "../../utils/getMoonIconFromMoonPhase";
import { useForecastData } from "../../hooks/useForecastData";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 25vw;
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

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MoonPhaseContainer = (): ReactElement => {
  const { t } = useTranslation();
  const { weather, loading } = useWeatherData();
  const { forecast } = useForecastData();

  if (loading || !weather || !forecast) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <TitleComponent
        value={t("moonPhase.title")}
        icon={
          <WiMoonWaningCrescent3 style={{ width: "25px", height: "25px" }} />
        }
      />
      <ValueContainer>
        <div>{getMoonIconFromMoonPhase(forecast.moonPhase)}</div>
        <NumberContainer index={`${weather.weather.humidityPercentage}%`} />
      </ValueContainer>
      <TitleComponent value={t(`moonPhase.phases.${forecast.moonPhase}`)} />
    </StyledContainer>
  );
};
