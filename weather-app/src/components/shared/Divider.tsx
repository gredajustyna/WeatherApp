import React, { ReactElement } from "react";
import { useTheme } from "styled-components";

export const Divider = (): ReactElement => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: "3px",
        height: "100%",
        borderRadius: "16px",
        backgroundColor: theme.colors.background,
      }}
    >
      {" "}
    </div>
  );
};
