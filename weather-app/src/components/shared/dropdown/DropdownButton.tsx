import React, { ReactElement } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledArrowDown = styled(AiOutlineDown)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

const StyledArrowUp = styled(AiOutlineUp)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

interface DropdownButtonProps {
  children: ReactElement | string;
  open: boolean;
  toggle: () => void;
}

const DropdownButton = ({ children, toggle, open }: DropdownButtonProps) => {
  return (
    <ButtonContainer onClick={toggle}>
      {children}
      <span>{open ? <StyledArrowUp /> : <StyledArrowDown />}</span>
    </ButtonContainer>
  );
};

export default DropdownButton;
