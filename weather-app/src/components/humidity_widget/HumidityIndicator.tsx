import { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(1%);
    background-position: 0% 100%;
  }
  50% {
    transform: translateY(-2%);
    background-position: 50% 50%;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 40px;
  height: 15vh;
  border-radius: 12px;
  border: 1px solid black;
`;
const WaterValue = styled.div<HumidityIndicatorProps>`
  position: absolute;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: ${({ value }) => (value / 100) * 15}vh;
  background: linear-gradient(to top, #2326bb, #73c8db, #ffffff);
  animation: ${waveAnimation} 4s ease-in-out infinite;
  z-index: 2;
  width: 100%;
  bottom: 0;
  border-top-right-radius: ${({ value }) => (value > 97 ? "10px" : "0px")};
  border-top-left-radius: ${({ value }) => (value > 97 ? "10px" : "0px")};
  overflow: hidden;
`;

interface HumidityIndicatorProps {
  value: number;
}

export const HumidityIndicator = ({
  value,
}: HumidityIndicatorProps): ReactElement => {
  return (
    <>
      <StyledContainer>
        <WaterValue value={value} />
      </StyledContainer>
    </>
  );
};
