import { ReactElement } from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: larger;
  font-weight: 600;
`;

interface DescriptionTextProps {
  description: string;
}

export const DescriptionText = ({
  description,
}: DescriptionTextProps): ReactElement => (
  <StyledText>{description}</StyledText>
);
