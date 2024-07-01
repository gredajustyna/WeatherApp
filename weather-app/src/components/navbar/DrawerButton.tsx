import { ReactElement } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { DrawerOpenProps } from "../../types/DrawerOpenProps";

const StyledButton = styled.button`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 60;
  height: 40;
  border-color: #bbd4ea;
`;

export const DrawerButton = ({ setIsOpen }: DrawerOpenProps): ReactElement => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <StyledButton onClick={toggleDrawer}>
      <AiOutlineMenu style={{ width: 40, height: 35, color: "#bbd4ea" }} />
    </StyledButton>
  );
};
