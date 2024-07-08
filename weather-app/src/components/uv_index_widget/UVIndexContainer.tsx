import { ReactElement, useContext } from "react";
import styled from "styled-components";
import { NumberContainer } from "./NumberContainer";
import { GradientContainer } from "./GradientContainer";
import { TitleComponent } from "../shared/TitleComponent";
import { mapUVIndexToLabelKey } from "../../utils/mapUVIndexToLabelKey";
import { useTranslation } from "react-i18next";
import { WiDaySunny } from "react-icons/wi";
import { WeatherContext } from "../../pages/MainPage";
import { Container } from "../shared/Container";

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
    <Container>
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
    </Container>
  );
};
