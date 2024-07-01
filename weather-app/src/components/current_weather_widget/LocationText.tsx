import { ReactElement } from "react";
import styled from "styled-components";

const StyledLocationText = styled.div`
  font-size: larger;
  font-weight: 600;
`;

const StyledUpdateText = styled.div`
  font-size: small;
  font-weight: 100;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LocationElementProps {
  city: string;
  country: string;
  lastUpdated: string;
}

export const LocationText = ({
  city,
  country,
  lastUpdated,
}: LocationElementProps): ReactElement => (
  <TextContainer>
    <StyledLocationText>
      {city}, {country}
    </StyledLocationText>
    <StyledUpdateText>Last updated: {lastUpdated}</StyledUpdateText>
  </TextContainer>
);
