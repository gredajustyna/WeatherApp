import React, { ReactElement } from "react";
import styled, { useTheme } from "styled-components";
import Toggle from "react-toggle";
import { useDispatch, useSelector } from "react-redux";
import { timeFormatSelector } from "../../store/settings/settings.selector";
import { TimeFormat } from "../../types/enums/TimeFormat";
import { setTimeFormat } from "../../store/settings/settings.actions";
import { t } from "i18next";

const TimeFormatSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;

  .react-toggle--checked .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.sky_blue};
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: white;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TitleContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const TimeFormatSettingRow = (): ReactElement => {
  const timeFormat = useSelector(timeFormatSelector);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <TimeFormatSettingContainer>
      <TitleContainer>
        <Title>{t("drawer.timeFormat")}</Title>
      </TitleContainer>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        <label>12h</label>
        <Toggle
          icons={false}
          style={{ backgroundColor: theme.colors.sky_blue }}
          defaultChecked={timeFormat === TimeFormat.TIME_24H}
          onChange={() => {
            if (timeFormat === TimeFormat.TIME_24H) {
              dispatch(setTimeFormat(TimeFormat.TIME_12H));
            } else {
              dispatch(setTimeFormat(TimeFormat.TIME_24H));
            }
          }}
        />
        <label>24h</label>
      </div>
    </TimeFormatSettingContainer>
  );
};
