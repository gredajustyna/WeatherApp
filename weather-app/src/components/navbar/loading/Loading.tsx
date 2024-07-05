import React from "react";
import styled, { useTheme } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const StyledIconDiv = styled.div`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = () => {
  const theme = useTheme();
  return (
    <StyledIconDiv>
      <AiOutlineLoading3Quarters
        style={{
          width: "200px",
          height: "200px",
          color: theme.colors.sky_blue,
        }}
      />
    </StyledIconDiv>
  );
};
