import { ReactElement, useState } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { SearchButton } from "./SettingsButton";
import { DrawerButton } from "./DrawerButton";
import { colors } from "../../consts/colors";
import { LocationButton } from "./LocationButton";
import { TemperatureSettingRow } from "../drawer/TemperatureSettingRow";
import { LanguageSettingRow } from "../drawer/LanguageSettingRow";

const NavbarContainer = styled.div`
  background-color: ${colors.sky_blue};
  height: 60px;
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
        <h1>{title}</h1>
        <div>
          <SearchButton />
          <LocationButton />
        </div>
      </NavbarContainer>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="350px"
        style={{ paddingTop: "60px" }}
      >
        <div style={{ gap: "50px" }}>
          <TemperatureSettingRow />
          <LanguageSettingRow />
        </div>
      </Drawer>
    </>
  );
};
