import { BasePropsWithChildren } from "frontend/types/types";
import styled from "styled-components";

const CardWrapper = styled.div`
  min-height: 50px;
  min-width: 50px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.contrast.regular};
  padding: ${(p) => p.theme.space.medium};
`;

const Card = ({ children, className }: BasePropsWithChildren) => {
  return <CardWrapper className={className}>{children}</CardWrapper>;
};

export default Card;
