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
      return <FaRegLaugh style={{ ...iconStyle, color: "green" }} />;
    case 2:
      return <FaRegSmile style={{ ...iconStyle, color: "lightgreen" }} />;
    case 3:
      return <FaRegMeh style={{ ...iconStyle, color: "yellow" }} />;
    case 4:
      return <FaRegFrown style={{ ...iconStyle, color: "orange" }} />;
    case 5:
      return <FaRegTired style={{ ...iconStyle, color: "red" }} />;
    case 6:
      return <FaSkull style={iconStyle} />;
    default:
      return <FaRegMeh style={iconStyle} />;
  }
};
