import { ReactElement, useContext } from "react";
import styled from "styled-components";
import { TitleComponent } from "../shared/TitleComponent";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { HumidityIndicator } from "./HumidityIndicator";
import { useTranslation } from "react-i18next";
import { WiHumidity } from "react-icons/wi";
import { WeatherContext } from "../../pages/MainPage";
import { Container } from "../shared/Container";

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
    <Container>
      <TitleComponent
        value={t("humidity.humidity")}
        icon={<WiHumidity style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        <HumidityIndicator value={weather.weather.humidityPercentage} />
        <NumberContainer index={`${weather.weather.humidityPercentage}%`} />
      </ValueContainer>
      <div />
    </Container>
  );
};
