import { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: larger;
  font-weight: 600;
`;

interface TitleComponentProps {
  value: string | number;
}

export const TitleComponent = ({
  value,
}: TitleComponentProps): ReactElement => <Title>{value}</Title>;
