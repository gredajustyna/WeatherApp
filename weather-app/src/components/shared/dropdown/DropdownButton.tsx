import React, { ReactElement } from "react";
import { AiOutlineDown } from "react-icons/ai";
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

const AnimatedIcon = styled(AiOutlineDown)<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
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
      <AnimatedIcon open={open} />
    </ButtonContainer>
  );
};

export default DropdownButton;
