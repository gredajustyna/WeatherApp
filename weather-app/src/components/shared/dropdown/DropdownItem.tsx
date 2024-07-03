import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  padding: 0.5rem;
  margin: 0.1rem;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 249, 255);
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
