import { ReactElement } from "react";
import styled from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useDispatch, useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";
import { Degrees } from "../../types/enums/Degrees";
import { setTemperatureScale } from "../../store/settings/settings.actions";

const TemperatureSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TemperatureSettingRow = (): ReactElement => {
  const temperatureScale = useSelector(temperatureScaleSelector);
  const dispatch = useDispatch();

  return (
    <TemperatureSettingContainer>
      <Toggle
        defaultChecked={temperatureScale === Degrees.CELSIUS}
        onChange={() => {
          if (temperatureScale === Degrees.CELSIUS) {
            dispatch(setTemperatureScale(Degrees.FAHRENHEIT));
          } else {
            dispatch(setTemperatureScale(Degrees.CELSIUS));
          }
        }}
      />
    </TemperatureSettingContainer>
  );
};
