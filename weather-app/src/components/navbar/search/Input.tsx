import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import styled from "styled-components";
import { getSearchData } from "../../../utils/getSearchData";
import { WeatherLocation } from "../../../types/Location";
import { debounce } from "lodash";
import { ClearButton } from "./ClearButton";

const InputContainer = styled.div`
  position: relative;
  width: 85%;
  display: flex;
  z-index: 25;
`;

const StyledInput = styled.input`
  width: calc(100% - 40px); // Zostawia miejsce na przycisk
  height: 45px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  padding-right: 40px; // Ustalenie paddingu po prawej stronie dla przycisku
  color: white;
  font-family: "capsuula";
`;

const PositionedButton = styled(ClearButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 40px;
  height: 100%;
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
  const inputRef = useRef<HTMLInputElement>(null);
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
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        onChange={handleInputChange}
        onFocus={() => setIsSearching(true)}
        onBlur={handleClearButtonClick}
        ref={inputRef}
      />
      {isSearching && <PositionedButton onClick={handleClearButtonClick} />}
    </InputContainer>
  );
};
