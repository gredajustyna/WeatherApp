import { ReactElement, useContext } from "react";
import styled from "styled-components";
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
import { Container } from "../shared/Container";

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FeelsLikeContainer = (): ReactElement => {
  const { t } = useTranslation();
  const { weather } = useContext(WeatherContext);
  const temperatureScale = useSelector(temperatureScaleSelector);
  const temperatureDifference = getPercentageFromTemperatureDifference(
    weather.weather.feelsLike - weather.weather.degrees
  );

  return (
    <Container>
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
    </Container>
  );
};
