import { ReactElement } from "react";
import styled from "styled-components";
import { formatDegrees } from "../../utils/formatDegrees";
import { useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";

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
  return (
    <StyledContainer>
      <div>{formatDegrees(temperature, temperatureScale)}</div>
      <div>
        <img src={icon} alt=""></img>
        <div>{hour}</div>
      </div>
    </StyledContainer>
  );
};
