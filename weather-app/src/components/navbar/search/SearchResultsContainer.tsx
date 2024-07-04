import { Dispatch, ReactElement, SetStateAction } from "react";
import { WeatherLocation } from "../../../types/Location";
import { useDispatch } from "react-redux";
import { SearchResults } from "../../shared/search/SearchResults";
import { SearchResultItem } from "../../shared/search/SearchResultItem";
import { setLocation } from "../../../store/settings/settings.actions";

interface SearchResultsContainerProps {
  searchResults: WeatherLocation[];
  setSearchResults: Dispatch<SetStateAction<WeatherLocation[]>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

export const SearchResultsContainer = ({
  searchResults,
  setSearchResults,
  setIsSearching,
}: SearchResultsContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const handleSearchResultItemClick = (result: WeatherLocation): void => {
    dispatch(setLocation(result.name));
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <SearchResults>
      {searchResults.map((result) => (
        <SearchResultItem
          key={result.name}
          value={`${result.name}, ${result.country}`}
          onClick={() => handleSearchResultItemClick(result)}
        />
      ))}
    </SearchResults>
  );
};
