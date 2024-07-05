import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import styled from "styled-components";
import { getSearchData } from "../../../utils/getSearchData";
import { WeatherLocation } from "../../../types/Location";

const StyledInput = styled.input`
  width: 30vw;
  height: 45px;
  border-radius: 12px;
`;

interface InputProps {
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
}

export const Input = ({
  searchResults,
  setSearchResults,
}: InputProps): ReactElement => {
  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // Pobranie wartości wprowadzonej w input
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = await getSearchData(inputValue);
    setSearchResults(results);
  };
  return <StyledInput onChange={handleInputChange} autoFocus />;
};
