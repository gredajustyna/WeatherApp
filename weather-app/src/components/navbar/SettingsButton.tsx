import { ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getWeatherData } from "../../utils/getWeatherData";
import { NavigationButton } from "../shared/NavigationButton";

export const SearchButton = (): ReactElement => {
  return (
    <NavigationButton
      onClick={async () => {
        await getWeatherData();
      }}
    >
      <AiOutlineSearch style={{ width: 40, height: 35, paddingRight: 10 }} />
    </NavigationButton>
  );
};
