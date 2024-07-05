import { ReactElement } from "react";
import styled from "styled-components";
import { formatDegrees } from "../../utils/formatDegrees";
import { useSelector } from "react-redux";
import {
  temperatureScaleSelector,
  timeFormatSelector,
} from "../../store/settings/settings.selector";
import { TimeFormat } from "../../types/enums/TimeFormat";
import { convertTo12HourFormat } from "../../utils/convertTo12HourFormat";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

interface HourContainerProps {
  hour: string;
  temperature: number;
  rain: number;
  icon: string;
}

export const HourContainer = ({
  hour,
  temperature,
  rain,
  icon,
}: HourContainerProps): ReactElement => {
  const temperatureScale = useSelector(temperatureScaleSelector);
  const timeFormat = useSelector(timeFormatSelector);
  return (
    <StyledContainer>
      <div>{formatDegrees(temperature, temperatureScale)}</div>
      <div>
        <img src={icon} alt=""></img>
        <div>
          {timeFormat === TimeFormat.TIME_24H
            ? hour
            : convertTo12HourFormat(hour)}
        </div>
      </div>
    </StyledContainer>
  );
};
