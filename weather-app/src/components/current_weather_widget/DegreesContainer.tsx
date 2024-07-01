import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Degrees } from "../../types/enums/Degrees";
import { formatDegrees } from "../../utils/formatDegrees";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

interface DegreesContainerProps {
  temperature: number;
  icon: string;
  alt: string;
}

export const DegreesContainer = ({
  temperature,
  icon,
  alt,
}: DegreesContainerProps): ReactElement => {
  const [smallStyle, setSmallStyle] = useState({
    fontSize: "70",
    marginTop: "-20px",
    marginBottom: "-20px",
  });

  const updateStyle = () => {
    const vw = window.innerWidth * 0.042;
    const vh = window.innerHeight * 0.042;
    const responsiveSize = vh + vw;
    setSmallStyle({
      fontSize: responsiveSize + "px",
      marginTop: "-20px",
      marginBottom: "-20px",
    });
  };

  useEffect(() => {
    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  return (
    <StyledContainer>
      <img src={icon} alt={alt} height={60} width={60}></img>
      <p style={smallStyle}>{formatDegrees(temperature, Degrees.CELSIUS)}</p>
    </StyledContainer>
  );
};
