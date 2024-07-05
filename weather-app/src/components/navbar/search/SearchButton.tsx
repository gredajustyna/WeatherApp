import { ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavigationButton } from "../../shared/NavigationButton";

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton = ({ onClick }: SearchButtonProps): ReactElement => {
  return (
    <NavigationButton onClick={onClick}>
      <AiOutlineSearch
        style={{ width: 40, height: 35, paddingRight: 10, cursor: "pointer" }}
      />
    </NavigationButton>
  );
};
