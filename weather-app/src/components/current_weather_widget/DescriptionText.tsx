import { ReactElement } from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: 1.5rem;
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
