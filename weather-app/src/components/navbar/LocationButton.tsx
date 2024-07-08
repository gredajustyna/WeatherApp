import { ReactElement } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { NavigationButton } from "../shared/NavigationButton";
import { getQParameterFromPosition } from "../../utils/getQParameterFromPosition";
import { useDispatch } from "react-redux";
import { setLocation } from "../../store/settings/settings.actions";
import { useTheme } from "styled-components";

export const LocationButton = (): ReactElement => {
  const dispatch = useDispatch();
  const handleLocationClick = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const q = getQParameterFromPosition(latitude, longitude);
    dispatch(setLocation(q));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  const theme = useTheme();
  return (
    <NavigationButton onClick={handleLocationClick}>
      <AiOutlineCompass
        style={{
          width: 30,
          height: 25,
          cursor: "pointer",
          color: theme.colors.iconDefault,
        }}
      />
    </NavigationButton>
  );
};
