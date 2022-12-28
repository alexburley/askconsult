import { BasePropsWithChildren } from "frontend/types/types";

interface ButtonProps
  extends BasePropsWithChildren,
    React.HTMLProps<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`min-w-12 min-h-12 text-md rounded-md bg-p p-2 text-c drop-shadow-md ${className}`}
      {...(props as { type: "button" })}
    >
      {children}
    </button>
  );
};
export default Button;
