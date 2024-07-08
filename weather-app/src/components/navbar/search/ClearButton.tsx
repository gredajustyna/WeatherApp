import { ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavigationButton } from "../../shared/NavigationButton";
import { useTheme } from "styled-components";

interface ClearButtonProps {
  onClick: () => void;
}

export const ClearButton = ({ onClick }: ClearButtonProps): ReactElement => {
  const theme = useTheme();
  return (
    <NavigationButton onClick={onClick}>
      <AiOutlineClose
        style={{
          width: 40,
          height: 35,
          paddingRight: 10,
          cursor: "pointer",
          color: theme.colors.iconDefault,
        }}
      />
    </NavigationButton>
  );
};
