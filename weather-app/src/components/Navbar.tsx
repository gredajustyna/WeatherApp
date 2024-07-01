import { ReactElement, useState } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { SettingsButton } from "./navbar/SettingsButton";
import { DrawerButton } from "./navbar/DrawerButton";

const NavbarContainer = styled.div`
  background-color: aquamarine;
  height: 50px;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  padding-left: 10px;
  padding-right: 10px;
`;

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: NavbarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavbarContainer>
        <DrawerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        <h1 style={{ color: "#bbd4ea" }}>{title}</h1>
        <SettingsButton />
      </NavbarContainer>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="20vw"
        style={{ paddingTop: "50px" }}
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};
