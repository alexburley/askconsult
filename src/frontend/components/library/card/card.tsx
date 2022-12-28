import { BasePropsWithChildren } from "frontend/types/types";

const Card = ({ children, className }: BasePropsWithChildren) => {
  return (
    <div
      className={`${className} min-h-50 min-w-50 rounded-md bg-p-600 p-1 drop-shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
