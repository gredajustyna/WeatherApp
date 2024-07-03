import { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/ContainerTitle";
import { useWeatherData } from "../../hooks/useWeatherData";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { HumidityIndicator } from "./HumidityIndicator";
import { useTranslation } from "react-i18next";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 20vw;
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

export const HumidityContainer = (): ReactElement => {
  const { weather, loading } = useWeatherData();
  const { t } = useTranslation();

  if (loading || !weather) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <TitleContainer>
        <TitleComponent value={t("humidity.humidity")} />
      </TitleContainer>
      <ValueContainer>
        <HumidityIndicator value={weather.weather.humidityPercentage} />
        <NumberContainer index={`${weather.weather.humidityPercentage}%`} />
      </ValueContainer>
    </StyledContainer>
  );
};
