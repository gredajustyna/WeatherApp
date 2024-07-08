import { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "capsuula";
`;

const TitleContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

interface TitleComponentProps {
  value: string | number;
  icon?: ReactElement;
}

export const TitleComponent = ({
  value,
  icon,
}: TitleComponentProps): ReactElement => (
  <TitleContainer>
    {icon && icon}
    <Title>{value}</Title>
  </TitleContainer>
);
