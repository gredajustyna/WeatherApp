import { ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavigationButton } from "../shared/NavigationButton";
import { useSelector } from "react-redux";
import { temperatureScaleSelector } from "../../store/settings/settings.selector";

export const SearchButton = (): ReactElement => {
  const degrees = useSelector(temperatureScaleSelector);
  return (
    <NavigationButton
      onClick={() => {
        console.log(degrees);
      }}
    >
      <AiOutlineSearch style={{ width: 40, height: 35, paddingRight: 10 }} />
    </NavigationButton>
  );
};
