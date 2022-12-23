import { BasePropsWithChildren } from "frontend/types/types";

const Button = ({ className, children }: BasePropsWithChildren) => {
  return (
    <button
      className={`min-w-12 min-h-12 text-md rounded-md p-2 drop-shadow-md ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
