import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../../pages/MainPage";
import { useTranslation } from "react-i18next";
import { convertTo24HourFormat } from "../../utils/convertTo24HourFormat";
import sunImage from "../../assets/images/sun.png";
import { useSelector } from "react-redux";
import { timeFormatSelector } from "../../store/settings/settings.selector";
import { TimeFormat } from "../../types/enums/TimeFormat";

const DayTimeIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SunriseSunsetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 36vw;
  margin-left: 2vw;
  margin-top: 4px;
`;

const calculateSunPosition = (
  currentTime: number,
  sunriseTime: number,
  sunsetTime: number
) => {
  const xStart = 10;
  const xEnd = 190;
  const totalDuration = sunsetTime - sunriseTime;
  const currentTimeFromSunrise = currentTime - sunriseTime;
  const x = xStart + (xEnd - xStart) * (currentTimeFromSunrise / totalDuration);
  const y =
    100 - 90 * Math.sin(Math.PI * (currentTimeFromSunrise / totalDuration));

  return { x, y };
};

export const DayTimeIndicator = () => {
  const { forecast } = useContext(WeatherContext);
  const { t } = useTranslation();
  const currentTime = new Date();
  const hour = currentTime.getHours() + currentTime.getMinutes() / 60;
  const sunriseHour = 4;
  const sunsetHour = 21;
  const { x, y } = calculateSunPosition(hour, sunriseHour, sunsetHour);
  const timeFormat = useSelector(timeFormatSelector);

  return (
    <DayTimeIndicatorContainer>
      <svg width="39vw" height="10vw" viewBox="0 0 200 50">
        <path
          id="sun-path"
          d={`M 10 100 A 90 90 0 0 1 190 100`}
          fill="none"
          stroke="#838383"
          strokeWidth="2"
          opacity={0.2}
        />
        <image
          xlinkHref={sunImage}
          x={x - 10}
          y={y - 10}
          height="20px"
          width="20px"
        >
          {/* <animateMotion dur="10s" begin="0s" fill="freeze">
            <mpath xlinkHref="#sun-path" />
          </animateMotion> */}
        </image>
      </svg>
      <SunriseSunsetContainer>
        <div>
          {t("dayTime.sunrise", {
            time:
              timeFormat === TimeFormat.TIME_12H
                ? forecast.sunrise
                : convertTo24HourFormat(forecast.sunrise),
          })}
        </div>
        <div>
          {t("dayTime.sunset", {
            time:
              timeFormat === TimeFormat.TIME_12H
                ? forecast.sunset
                : convertTo24HourFormat(forecast.sunset),
          })}
        </div>
      </SunriseSunsetContainer>
    </DayTimeIndicatorContainer>
  );
};
