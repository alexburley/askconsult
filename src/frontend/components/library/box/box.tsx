import { BP_TABLET } from "@styles/themes";
import { BasePropsWithChildren } from "frontend/types/types";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${BP_TABLET}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = ({ children, className }: BasePropsWithChildren) => {
  return <BoxContainer className={className}>{children}</BoxContainer>;
};

export default Box;
