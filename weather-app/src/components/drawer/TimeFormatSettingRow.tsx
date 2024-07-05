import React, { ReactElement } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TitleComponent } from "../shared/TitleComponent";
import Toggle from "react-toggle";
import { useDispatch, useSelector } from "react-redux";
import { timeFormatSelector } from "../../store/settings/settings.selector";
import { TimeFormat } from "../../types/enums/TimeFormat";
import { setTimeFormat } from "../../store/settings/settings.actions";

const TimeFormatSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;

  .react-toggle--checked .react-toggle-track {
    background-color: ${colors.sky_blue};
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: white;
  }
`;

export const TimeFormatSettingRow = (): ReactElement => {
  const timeFormat = useSelector(timeFormatSelector);
  const dispatch = useDispatch();
  return (
    <TimeFormatSettingContainer>
      <TitleComponent value="Time format" />
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
          style={{ backgroundColor: colors.sky_blue }}
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
