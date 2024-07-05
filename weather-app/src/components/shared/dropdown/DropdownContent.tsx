import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledContent = styled.div<{ open: boolean }>`
  position: absolute;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  max-height: 40vh;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-right: 80px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out, visibility 0s 0.3s,
    transform 0.3s ease-in-out;

  ${(props) =>
    props.open &&
    `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  `}
`;

interface DropdownContentProps {
  children: ReactElement;
  open: boolean;
}

export const DropdownContent = ({ children, open }: DropdownContentProps) => {
  return <StyledContent open={open}>{children}</StyledContent>;
};
