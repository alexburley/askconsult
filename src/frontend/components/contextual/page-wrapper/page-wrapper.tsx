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
    <div className={`flex flex-col h-screen m-0 ${className} `}>
      <Nav />
      <div className={`${noPad && "pb-4"}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
