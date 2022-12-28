import { BasePropsWithChildren } from "frontend/types/types";

import Footer from "../footer";
import Nav from "../nav";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PageWrapperProps extends BasePropsWithChildren {}

const PageWrapper = ({ className, children }: PageWrapperProps) => {
  return (
    <main
      className={`flex h-1 min-h-screen flex-col justify-between ${className} `}
    >
      <Nav />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default PageWrapper;
