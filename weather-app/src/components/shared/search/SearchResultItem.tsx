import { ReactElement } from "react";
import styled from "styled-components";

const StyledSearchResultItem = styled.div`
  width: 97%;
  padding: 4px;
  height: 30px;
  transition: background-color 0.3s ease;
  border-radius: 12px;
  margin: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f1ecec;
  }
`;

interface SearchResultItemProps {
  value: string;
  onClick: () => void;
}

export const SearchResultItem = ({
  value,
  onClick,
}: SearchResultItemProps): ReactElement => {
  return (
    <StyledSearchResultItem onClick={onClick}>{value}</StyledSearchResultItem>
  );
};
