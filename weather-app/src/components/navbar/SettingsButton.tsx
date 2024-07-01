import { ReactElement } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import styled from "styled-components";
import { geWeatherDataFromApi } from "../../utils/getWeatherData";

const StyledButton = styled.button`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 60;
  height: 40;
  border: none;
`;

export const SettingsButton = (): ReactElement => {
  return (
    <StyledButton
      onClick={async () => {
        await geWeatherDataFromApi();
      }}
    >
      <AiOutlineSetting
        style={{ width: 40, height: 35, color: "#bbd4ea", paddingRight: 10 }}
      />
    </StyledButton>
  );
};
