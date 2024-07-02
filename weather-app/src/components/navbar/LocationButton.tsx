import { ReactElement } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { NavigationButton } from "../shared/NavigationButton";

export const LocationButton = (): ReactElement => (
  <NavigationButton onClick={() => {}}>
    <AiOutlineCompass style={{ width: 40, height: 35, paddingRight: 10 }} />
  </NavigationButton>
);
