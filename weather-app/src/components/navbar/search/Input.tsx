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

const StyledInput = styled.input`
  width: 70%;
  height: 45px;
  border-radius: 20px;
  border-color: "transparent";
  border-width: 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface InputProps {
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
}

export const Input = ({
  searchResults,
  setSearchResults,
}: InputProps): ReactElement => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };
  return <StyledInput onChange={handleInputChange} />;
};
