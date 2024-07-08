import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const ResultsContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 60px;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: fit-content;
  border-radius: 12px;
  z-index: 300;
  background-color: ${({ theme }) => theme.colors.drawerBackground};
`;

interface SearchResultsProps {
  children?: ReactNode;
}

export const SearchResults = ({
  children,
}: SearchResultsProps): ReactElement => {
  return <ResultsContainer>{children}</ResultsContainer>;
};
