import { ReactElement } from "react";
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

interface NavigationButtonProps {
  onClick: () => void;
  children: ReactElement;
}

export const NavigationButton = ({
  onClick,
  children,
}: NavigationButtonProps): ReactElement => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
