import { ReactElement } from "react";
import styled from "styled-components";
import { ResponsiveNumberContainer } from "../shared/ResponsiveNumberContainer";

const StyledContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  padding-left: 20px;
  flex: 2;
  text-align: right;
`;

interface NumberContainerProps {
  index: number | string;
}

export const NumberContainer = ({
  index,
}: NumberContainerProps): ReactElement => {
  return (
    <StyledContainer>
      <ResponsiveNumberContainer value={index} />
    </StyledContainer>
  );
};
