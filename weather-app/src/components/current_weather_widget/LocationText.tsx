import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getCountryCodeFromName } from "../../utils/getCountryCodeFromName";
import { useSelector } from "react-redux";
import { timeFormatSelector } from "../../store/settings/settings.selector";
import { TimeFormat } from "../../types/enums/TimeFormat";
import { formatLastUpdatedText } from "../../utils/formatLastUpdatedText";

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
  const countryCode = getCountryCodeFromName(country);
  const timeFormat = useSelector(timeFormatSelector);

  return (
    <TextContainer>
      <div>
        <img src={`https://flagcdn.com/16x12/${countryCode}.png`} alt="flag" />
        <StyledLocationText>
          {city}, {country}
        </StyledLocationText>
      </div>

      <StyledUpdateText>
        {t("currentWeather.lastUpdate")}{" "}
        {timeFormat === TimeFormat.TIME_24H
          ? lastUpdated
          : formatLastUpdatedText(lastUpdated)}
      </StyledUpdateText>
    </TextContainer>
  );
};
