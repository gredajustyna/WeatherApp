import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WeatherContext } from "../../pages/MainPage";
import { WiRainMix } from "react-icons/wi";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { WiRain } from "react-icons/wi";

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

export const RainProbabilityContainer = () => {
  const { t } = useTranslation();
  const { forecast } = useContext(WeatherContext);
  return (
    <StyledContainer>
      <TitleComponent
        value={t("rainProbability.title")}
        icon={<WiRainMix style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <WiRain style={{ width: "10vh", height: "10vh" }} />
        <NumberContainer index={`${forecast.chanceOfRain}%`} />
      </ValueContainer>
    </StyledContainer>
  );
};
