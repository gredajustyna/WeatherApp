import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Toggle from "react-toggle";
import { themeSelector } from "../../store/settings/settings.selector";
import { setTheme } from "../../store/settings/settings.actions";

const ThemeSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;

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

export const ThemeSettingRow = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useSelector(themeSelector);
  const colorTheme = useTheme();

  return (
    <ThemeSettingContainer>
      <TitleContainer>
        <Title>{t("drawer.theme.theme")}</Title>
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
        <label>{t("drawer.theme.dark")}</label>
        <Toggle
          icons={false}
          style={{ backgroundColor: colorTheme.colors.sky_blue }}
          defaultChecked={theme === "light"}
          onChange={() => {
            if (theme === "light") {
              dispatch(setTheme("dark"));
            } else {
              dispatch(setTheme("light"));
            }
          }}
        />
        <label>{t("drawer.theme.light")}</label>
      </div>
    </ThemeSettingContainer>
  );
};
