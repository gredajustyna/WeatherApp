import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  padding: 8px;
  margin: 4px;
  width: 100%;
  border-radius: 12px;
  transition: background-color 0.3s ease;

  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

interface DropdownItemProps {
  children: JSX.Element | any;
  onClick: any;
}

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
  return <StyledItem onClick={onClick}>{children}</StyledItem>;
};

export default DropdownItem;
