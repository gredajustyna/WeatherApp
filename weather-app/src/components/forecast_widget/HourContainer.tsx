import { ReactElement } from "react";
import styled from "styled-components";
import { formatDegrees } from "../../utils/formatDegrees";
import { Degrees } from "../../types/enums/Degrees";

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
  return (
    <StyledContainer>
      <div>{formatDegrees(temperature, Degrees.CELSIUS)}</div>
      <div>
        <img src={icon} alt=""></img>
        <div>{hour}</div>
      </div>
    </StyledContainer>
  );
};
