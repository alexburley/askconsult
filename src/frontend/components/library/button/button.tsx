import { BasePropsWithChildren } from "frontend/types/types";

const Button = ({ className, children }: BasePropsWithChildren) => {
  return (
    <button
      className={`min-w-12 min-h-12 p-2 rounded-md drop-shadow-md text-md ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
