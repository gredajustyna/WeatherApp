import React, { ReactNode } from "react";
import { FaRegLaugh } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaRegMeh } from "react-icons/fa";
import { FaRegFrown } from "react-icons/fa";
import { FaRegTired } from "react-icons/fa";
import { FaSkull } from "react-icons/fa";

const iconStyle = {
  width: "8vh",
  height: "8vh",
};

export const getFaceIconFromEpaIndex = (index: number): ReactNode => {
  switch (index) {
    case 1:
      return <FaRegLaugh style={iconStyle} />;
    case 2:
      return <FaRegSmile style={iconStyle} />;
    case 3:
      return <FaRegMeh style={iconStyle} />;
    case 4:
      return <FaRegFrown style={iconStyle} />;
    case 5:
      return <FaRegTired style={iconStyle} />;
    case 6:
      return <FaSkull style={iconStyle} />;
    default:
      return <FaRegMeh style={iconStyle} />;
  }
};
