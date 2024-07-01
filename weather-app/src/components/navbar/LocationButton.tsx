import { ReactElement } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 60;
  height: 40;
  border: none;
`;

export const LocationButton = (): ReactElement => {
  return (
    <StyledButton onClick={() => {}}>
      <AiOutlineCompass style={{ width: 40, height: 35, paddingRight: 10 }} />
    </StyledButton>
  );
};
