import { ReactElement, useEffect, useState } from "react";

interface ResponsiveNumberContainerProps {
  value: number | string;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
}

export const ResponsiveNumberContainer = ({
  value,
  fontSize = 70,
  marginTop = -20,
  marginBottom = -20,
}: ResponsiveNumberContainerProps): ReactElement => {
  const [smallStyle, setSmallStyle] = useState({
    fontSize: `${fontSize}`,
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`,
    fontFamily: "skinny",
  });

  const updateStyle = () => {
    const vw = window.innerWidth * 0.042;
    const vh = window.innerHeight * 0.042;
    const responsiveSize = vh + vw;
    setSmallStyle({
      fontSize: responsiveSize + "px",
      marginTop: "-20px",
      marginBottom: "-20px",
      fontFamily: "skinny",
    });
  };

  useEffect(() => {
    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  return <p style={smallStyle}>{value}</p>;
};
