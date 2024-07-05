import { ReactElement, useContext } from "react";
import styled from "styled-components";
import { NumberContainer } from "./NumberContainer";
import { GradientContainer } from "./GradientContainer";
import { TitleComponent } from "../shared/TitleComponent";
import { mapUVIndexToLabelKey } from "../../utils/mapUVIndexToLabelKey";
import { useTranslation } from "react-i18next";
import { WiDaySunny } from "react-icons/wi";
import { WeatherContext } from "../../pages/MainPage";

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
  background-color: ${({ theme }) => theme.colors.sky_blue};
  padding-left: 10px;
  padding-right: 10px;
`;
const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UVIndexContainer = (): ReactElement => {
  const { t } = useTranslation();
  const { weather } = useContext(WeatherContext);

  return (
    <StyledContainer>
      <TitleComponent
        value={t("UVIndex.UVIndex")}
        icon={<WiDaySunny style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <GradientContainer index={weather.weather.uvIndex} />
        <NumberContainer index={weather.weather.uvIndex} />
      </ValueContainer>
      <TitleComponent
        value={t(`UVIndex.${mapUVIndexToLabelKey(weather.weather.uvIndex)}`)}
      />
    </StyledContainer>
  );
};
