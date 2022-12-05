import { BasePropsWithChildren } from "frontend/types/types";
import styled from "styled-components";

import Footer from "../footer";
import Nav from "../nav";

export interface PageWrapperProps extends BasePropsWithChildren {
  noPad?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
`;

const Container = styled.div<{ noPad: boolean }>`
  padding-bottom: ${(p) => (p.noPad ? "0px" : "16px")};
`;

const PageWrapper = ({
  className,
  children,
  noPad = false,
}: PageWrapperProps) => {
  return (
    <Wrapper className={className}>
      <Nav />
      <Container noPad={noPad}>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default PageWrapper;
