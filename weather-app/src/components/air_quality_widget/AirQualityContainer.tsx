import React, { useContext } from "react";
import styled from "styled-components";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WiFog } from "react-icons/wi";
import { NumberContainer } from "../uv_index_widget/NumberContainer";
import { WeatherContext } from "../../pages/MainPage";
import { getFaceIconFromEpaIndex } from "../../utils/getFaceIconFromEpaIndex";
import { mapEpaIndexToLabelKey } from "../../utils/mapEpaIndexToLabelKey";
import { Container } from "../shared/Container";

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AirQualityContainer = () => {
  const { t } = useTranslation();
  const { weather } = useContext(WeatherContext);
  return (
    <Container>
      <TitleComponent
        value={t("airQuality.title")}
        icon={<WiFog style={{ width: "25px", height: "25px" }} />}
      />
      <ValueContainer>
        {getFaceIconFromEpaIndex(weather.airQuality.usEpaIndex)}
        <NumberContainer index={weather.airQuality.pm2_5} />
        <div>
          <div>µg/m3</div>
          <div>PM 2.5</div>
        </div>
      </ValueContainer>
      <TitleComponent
        value={t(
          `airQuality.quality.${mapEpaIndexToLabelKey(
            weather.airQuality.usEpaIndex
          )}`
        )}
      />
    </Container>
  );
};
