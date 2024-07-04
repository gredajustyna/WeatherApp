import { ReactNode } from "react";
import { MoonPhase } from "../types/enums/MoonPhase";
import {
  WiMoonNew,
  WiMoonWaxingCrescent3,
  WiMoonFirstQuarter,
  WiMoonWaxingGibbous5,
  WiMoonFull,
  WiMoonWaningGibbous6,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent3,
} from "react-icons/wi";
import styled from "styled-components";

const MoonBackground = styled.div`
  position: absolute;
  left: 5;
  width: 76%;
  height: 76%;
  background-color: #838383;
  opacity: 0.2;
  border-radius: 50%;
  z-index: 1;
  transform: translateY(-2%);
`;

const IconContainer = styled.div`
  position: relative;
  height: 13vh;
  width: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: -1;
`;

const iconStyle = {
  height: "13vh",
  width: "13vh",
  color: "white",
  borderRadius: "50%",
};

export const getMoonIconFromMoonPhase = (moonPhase: MoonPhase): ReactNode => {
  const icon = {
    [MoonPhase.NEW_MOON]: <WiMoonNew style={iconStyle} />,
    [MoonPhase.WAXING_CRESCENT]: <WiMoonWaxingCrescent3 style={iconStyle} />,
    [MoonPhase.FIRST_QUARTER]: <WiMoonFirstQuarter style={iconStyle} />,
    [MoonPhase.WAXING_GIBBOUS]: <WiMoonWaxingGibbous5 style={iconStyle} />,
    [MoonPhase.FULL_MOON]: <WiMoonFull style={iconStyle} />,
    [MoonPhase.WANING_GIBBOUS]: <WiMoonWaningGibbous6 style={iconStyle} />,
    [MoonPhase.LAST_QUARTER]: <WiMoonThirdQuarter style={iconStyle} />,
    [MoonPhase.WANING_CRESCENT]: <WiMoonWaningCrescent3 style={iconStyle} />,
  }[moonPhase] || <WiMoonWaxingCrescent3 style={iconStyle} />;

  return (
    <IconContainer>
      <MoonBackground />
      {icon}
    </IconContainer>
  );
};
