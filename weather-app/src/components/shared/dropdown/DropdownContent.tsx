import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  position: absolute;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  max-height: 40vh;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform: translateY(-5%);
  transition: transform 150ms ease-in-out, opacity 100ms ease-in-out;
  margin-right: 80px;
`;

interface DropdownContentProps {
  children: ReactElement;
  open: boolean;
}

const DropdownContent = ({ children, open }: DropdownContentProps) => {
  if (!open) return <></>;
  return <StyledContent>{children}</StyledContent>;
};

export default DropdownContent;
