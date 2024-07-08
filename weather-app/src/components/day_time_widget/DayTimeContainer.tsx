import React from "react";
import styled from "styled-components";
import { TitleComponent } from "../shared/TitleComponent";
import { useTranslation } from "react-i18next";
import { WiTime10 } from "react-icons/wi";
import { DayTimeIndicator } from "./DayTimeIndicator";

const StyledContainer = styled.div`
  border-radius: 12px;
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 100px + 20vh;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 10px;
  padding-right: 10px;
`;

export const DayTimeContainer = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <TitleComponent
        value={t("dayTime.title")}
        icon={<WiTime10 style={{ width: "25px", height: "25px" }} />}
      />
      <DayTimeIndicator />
    </StyledContainer>
  );
};
