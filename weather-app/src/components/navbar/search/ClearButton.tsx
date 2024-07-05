import { ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavigationButton } from "../../shared/NavigationButton";

interface ClearButtonProps {
  onClick: () => void;
}

export const ClearButton = ({ onClick }: ClearButtonProps): ReactElement => {
  return (
    <NavigationButton onClick={onClick}>
      <AiOutlineClose
        style={{ width: 40, height: 35, paddingRight: 10, cursor: "pointer" }}
      />
    </NavigationButton>
  );
};
