import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const ResultsContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-54%);
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  z-index: 300;
`;

interface SearchResultsProps {
  children?: ReactNode;
}

export const SearchResults = ({
  children,
}: SearchResultsProps): ReactElement => {
  return <ResultsContainer>{children}</ResultsContainer>;
};
