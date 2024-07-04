import { ReactElement, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/TitleComponent";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { useTranslation } from "react-i18next";
import { WiThermometer } from "react-icons/wi";
import { formatDegrees } from "../../utils/formatDegrees";
import { useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";
import { FeelsLikeIndicator } from "./FeelsLikeIndicator";
import { mapTemperatureDifferenceToLabelKey } from "../../utils/mapTemperatureDifferenceToLabelKey";
import { getPercentageFromTemperatureDifference } from "../../utils/getPercentageFromTemperatureDifference";
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

export const FeelsLikeContainer = (): ReactElement => {
  const { t } = useTranslation();
  const { weather } = useContext(WeatherContext);
  const temperatureScale = useSelector(temperatureScaleSelector);
  const temperatureDifference = getPercentageFromTemperatureDifference(
    weather.weather.feelsLike - weather.weather.degrees
  );

  return (
    <StyledContainer>
      <TitleComponent
        value={t("feelsLike.title")}
        icon={<WiThermometer style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <FeelsLikeIndicator difference={temperatureDifference} />
        <NumberContainer
          index={formatDegrees(weather.weather.feelsLike, temperatureScale)}
        />
      </ValueContainer>
      <TitleComponent
        value={t(
          `feelsLike.feelsLike.${mapTemperatureDifferenceToLabelKey(
            temperatureDifference
          )}`
        )}
      />
    </StyledContainer>
  );
};
