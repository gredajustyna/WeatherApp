import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import styled, { useTheme } from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DrawerButton } from "./DrawerButton";
import { LocationButton } from "./LocationButton";
import { TemperatureSettingRow } from "../drawer/TemperatureSettingRow";
import { LanguageSettingRow } from "../drawer/LanguageSettingRow";
import { SearchButton } from "./search/SearchButton";
import { ClearButton } from "./search/ClearButton";
import { Input } from "./search/Input";
import { WeatherLocation } from "../../types/Location";
import { TimeFormatSettingRow } from "../drawer/TimeFormatSettingRow";
import { ThemeSettingRow } from "../drawer/ThemeSettingRow";

const NavbarContainer = styled.div`
  background-color: "transparent";
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

interface NavbarProps {
  title: string;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
}

export const Navbar = ({
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
  const theme = useTheme();

  return (
    <>
      <NavbarContainer>
        <DrawerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        <Input
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <LocationButton />
        <div>
          {isSearching ? (
            <ClearButton onClick={handleClearButtonClick} />
          ) : (
            <SearchButton onClick={() => setIsSearching(true)} />
          )}
        </div>
      </NavbarContainer>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="350px"
      >
        <div
          style={{
            gap: "50px",
            color: theme.colors.drawerText,
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: theme.colors.drawerBackground,
            height: " 100%",
          }}
        >
          <TimeFormatSettingRow />
          <TemperatureSettingRow />
          <ThemeSettingRow />
          <LanguageSettingRow />
        </div>
      </Drawer>
    </>
  );
};
