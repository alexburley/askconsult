import { BasePropsWithChildren } from "frontend/types/types";

const Box = ({ className, children }: BasePropsWithChildren) => {
  return (
    <div
      className={`flex flex-col justify-center md:flex-row md:items-start md:justify-start ${className}`}
    >
      {children}
    </div>
  );
};
export default Box;
