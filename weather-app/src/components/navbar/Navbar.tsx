import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DrawerButton } from "./DrawerButton";
import { colors } from "../../consts/colors";
import { LocationButton } from "./LocationButton";
import { TemperatureSettingRow } from "../drawer/TemperatureSettingRow";
import { LanguageSettingRow } from "../drawer/LanguageSettingRow";
import { SearchButton } from "./search/SearchButton";
import { ClearButton } from "./search/ClearButton";
import { Input } from "./search/Input";
import { WeatherLocation } from "../../types/Location";

const NavbarContainer = styled.div`
  background-color: ${colors.sky_blue};
  height: 60px;
  width: 100%;
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
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
}

export const Navbar = ({
  title,
  isSearching,
  setIsSearching,
  searchResults,
  setSearchResults,
}: NavbarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClearButtonClick = (): void => {
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <>
      <NavbarContainer>
        <DrawerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        {isSearching ? (
          <Input
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        ) : (
          <h1 style={{ fontFamily: "skinny", fontSize: "60px" }}>{title}</h1>
        )}
        <div>
          {isSearching ? (
            <ClearButton onClick={handleClearButtonClick} />
          ) : (
            <SearchButton onClick={() => setIsSearching(true)} />
          )}
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
