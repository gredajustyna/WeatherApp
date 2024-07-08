import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<ContainerProps>`
  border-radius: 12px;
  position: ${(props) => props.position};
  height: ${(props) => props.height};
  display: flex;
  width: 100%;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface ContainerProps {
  position?: "absolute" | "relative";
  flexDirection?: "row" | "column";
  height?: string | number;
  children?: ReactNode;
}

export const Container = ({
  position,
  flexDirection = "column",
  height = "20%",
  children,
}: ContainerProps): ReactElement => {
  return (
    <StyledContainer
      position={position}
      flexDirection={flexDirection}
      height={height}
    >
      {children}
    </StyledContainer>
  );
};
