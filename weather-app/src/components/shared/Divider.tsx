import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 3px;
  height: 90vh;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  margin-left: 0.5%;
`;

export const Divider = (): ReactElement => {
  return <StyledContainer />;
};
