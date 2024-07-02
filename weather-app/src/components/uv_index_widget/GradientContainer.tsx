import styled from "styled-components";
import { colors } from "../../consts/colors";
import { ReactElement } from "react";

const StyledContainer = styled.div`
  position: relative;
  width: 250px;
  height: 10px;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    ${colors.dark_gray},
    ${colors.light_gray},
    ${colors.calm_green},
    ${colors.light_pink},
    ${colors.dark_pink}
  );
  flex: 7;
`;

const StyledDot = styled.div<GradientContainerProps>`
  position: absolute;
  bottom: -2px;
  left: ${({ index }) => index * 10 - 7.5}%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
`;

interface GradientContainerProps {
  index: number;
}

export const GradientContainer = ({
  index,
}: GradientContainerProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledDot index={index} />
    </StyledContainer>
  );
};
