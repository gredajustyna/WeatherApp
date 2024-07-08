import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { getMoonIconFromMoonPhase } from "../../utils/getMoonIconFromMoonPhase";
import { WeatherContext } from "../../pages/MainPage";
import { Container } from "../shared/Container";

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MoonPhaseContainer = (): ReactElement => {
  const { weather, forecast } = useContext(WeatherContext);
  const { t } = useTranslation();

  return (
    <Container>
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
    </Container>
  );
};
