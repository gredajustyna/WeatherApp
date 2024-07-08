import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
} from "react";
import styled from "styled-components";
import { getSearchData } from "../../../utils/getSearchData";
import { WeatherLocation } from "../../../types/Location";
import { debounce } from "lodash";
import { ClearButton } from "./ClearButton";

const InputContainer = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  z-index: 300;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  padding-right: 40px; // Miejsce na przycisk
`;

const PositionedButton = styled(ClearButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

interface InputProps {
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

export const Input = ({
  searchResults,
  isSearching,
  setSearchResults,
  setIsSearching,
}: InputProps): ReactElement => {
  // Funkcja debounce
  const debouncedSearch = useCallback(
    debounce(async (inputValue) => {
      if (inputValue.trim() === "") {
        setSearchResults([]);
      } else {
        const results = await getSearchData(inputValue);
        setSearchResults(results);
      }
    }, 300),
    []
  );

  const handleClearButtonClick = (): void => {
    setIsSearching(false);
    setSearchResults([]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        onChange={handleInputChange}
        onFocus={() => setIsSearching(true)}
      />
      {isSearching && <PositionedButton onClick={handleClearButtonClick} />}
    </InputContainer>
  );
};
