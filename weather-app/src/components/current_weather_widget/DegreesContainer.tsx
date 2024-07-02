import { ReactElement } from "react";
import styled from "styled-components";
import { formatDegrees } from "../../utils/formatDegrees";
import { ResponsiveNumberContainer } from "../shared/ResponsiveNumberContainer";
import { useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

interface DegreesContainerProps {
  temperature: number;
  icon: string;
  alt: string;
}

export const DegreesContainer = ({
  temperature,
  icon,
  alt,
}: DegreesContainerProps): ReactElement => {
  const temperatureScale = useSelector(temperatureScaleSelector);
  return (
    <StyledContainer>
      <img src={icon} alt={alt} height={60} width={60}></img>
      <ResponsiveNumberContainer
        value={formatDegrees(temperature, temperatureScale)}
      />
    </StyledContainer>
  );
};
