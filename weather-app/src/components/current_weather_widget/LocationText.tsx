import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledLocationText = styled.div`
  font-size: larger;
  font-weight: 600;
`;

const StyledUpdateText = styled.div`
  font-size: small;
  font-weight: 100;
  font-family: "Courier New", Courier, monospace;
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
}: LocationElementProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <TextContainer>
      <StyledLocationText>
        {city}, {country}
      </StyledLocationText>
      <StyledUpdateText>
        {t("currentWeather.lastUpdate")} {lastUpdated}
      </StyledUpdateText>
    </TextContainer>
  );
};
