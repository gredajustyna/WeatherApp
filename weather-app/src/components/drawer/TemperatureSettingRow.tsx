import { ReactElement } from "react";
import styled, { useTheme } from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useDispatch, useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";
import { Degrees } from "../../types/enums/Degrees";
import { setTemperatureScale } from "../../store/settings/settings.actions";
import { TitleComponent } from "../shared/TitleComponent";
import { t } from "i18next";

const TemperatureSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;

  .react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.sky_blue};
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: white;
  }
`;

export const TemperatureSettingRow = (): ReactElement => {
  const temperatureScale = useSelector(temperatureScaleSelector);
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <TemperatureSettingContainer>
      <TitleComponent value={t("drawer.temperatureScale")} />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        <label>°F</label>
        <Toggle
          icons={false}
          style={{ backgroundColor: theme.colors.sky_blue }}
          defaultChecked={temperatureScale === Degrees.CELSIUS}
          onChange={() => {
            if (temperatureScale === Degrees.CELSIUS) {
              dispatch(setTemperatureScale(Degrees.FAHRENHEIT));
            } else {
              dispatch(setTemperatureScale(Degrees.CELSIUS));
            }
          }}
        />
        <label>°C</label>
      </div>
    </TemperatureSettingContainer>
  );
};
