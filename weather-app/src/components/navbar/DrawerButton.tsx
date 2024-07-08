import { ReactElement } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled, { useTheme } from "styled-components";
import { DrawerOpenProps } from "../../types/DrawerOpenProps";

const StyledButton = styled.button`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  width: 60;
  height: 40;
`;

export const DrawerButton = ({ setIsOpen }: DrawerOpenProps): ReactElement => {
  const theme = useTheme();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <StyledButton onClick={toggleDrawer}>
      <AiOutlineMenu
        style={{ width: 30, height: 25, color: theme.colors.iconDefault }}
      />
    </StyledButton>
  );
};
