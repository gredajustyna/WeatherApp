import { ReactElement } from "react";
import styled from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useDispatch, useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";
import { Degrees } from "../../types/enums/Degrees";
import { setTemperatureScale } from "../../store/settings/settings.actions";
import { TitleComponent } from "../shared/ContainerTitle";
import { colors } from "../../consts/colors";

const TemperatureSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;

  .react-toggle--checked .react-toggle-track {
    background-color: ${colors.sky_blue};
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: white;
  }
`;

export const TemperatureSettingRow = (): ReactElement => {
  const temperatureScale = useSelector(temperatureScaleSelector);
  const dispatch = useDispatch();

  return (
    <TemperatureSettingContainer>
      <TitleComponent value="Temperature scale" />
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
        <label>°C</label>
        <Toggle
          icons={false}
          style={{ backgroundColor: colors.sky_blue }}
          defaultChecked={temperatureScale === Degrees.CELSIUS}
          onChange={() => {
            if (temperatureScale === Degrees.CELSIUS) {
              dispatch(setTemperatureScale(Degrees.FAHRENHEIT));
            } else {
              dispatch(setTemperatureScale(Degrees.CELSIUS));
            }
          }}
        />
        <label>°F</label>
      </div>
    </TemperatureSettingContainer>
  );
};
