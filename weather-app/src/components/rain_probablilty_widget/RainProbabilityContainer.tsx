import React, { useContext } from "react";
import styled from "styled-components";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WeatherContext } from "../../pages/MainPage";
import { WiRainMix } from "react-icons/wi";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { WiRain } from "react-icons/wi";
import { Container } from "../shared/Container";
const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const RainProbabilityContainer = () => {
  const { t } = useTranslation();
  const { forecast } = useContext(WeatherContext);
  return (
    <Container>
      <TitleComponent
        value={t("rainProbability.title")}
        icon={<WiRainMix style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <WiRain style={{ width: "10vh", height: "10vh" }} />
        <NumberContainer index={`${forecast.chanceOfRain}%`} />
      </ValueContainer>
      <TitleComponent value={" "} />
    </Container>
  );
};
