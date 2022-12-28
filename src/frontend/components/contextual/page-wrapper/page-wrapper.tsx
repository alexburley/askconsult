import { BasePropsWithChildren } from "frontend/types/types";

import Footer from "../footer";
import Nav from "../nav";

export interface PageWrapperProps extends BasePropsWithChildren {
  noPad?: boolean;
}

const PageWrapper = ({
  className,
  children,
  noPad = false,
}: PageWrapperProps) => {
  return (
    <div
      className={`flex h-1 min-h-screen flex-col justify-between ${className} `}
    >
      <Nav />
      <div className={`${noPad && "pb-4"}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
