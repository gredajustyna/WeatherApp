import { ReactElement, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/TitleComponent";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { HumidityIndicator } from "./HumidityIndicator";
import { useTranslation } from "react-i18next";
import { WiHumidity } from "react-icons/wi";
import { WeatherContext } from "../../pages/MainPage";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 15vw;
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

export const HumidityContainer = (): ReactElement => {
  const { weather } = useContext(WeatherContext);
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <TitleComponent
        value={t("humidity.humidity")}
        icon={<WiHumidity style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <HumidityIndicator value={weather.weather.humidityPercentage} />
        <NumberContainer index={`${weather.weather.humidityPercentage}%`} />
      </ValueContainer>
    </StyledContainer>
  );
};
