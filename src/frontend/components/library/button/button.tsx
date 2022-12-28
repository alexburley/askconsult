import { BasePropsWithChildren } from "frontend/types/types";
interface ButtonProps
  extends BasePropsWithChildren,
    React.HTMLProps<HTMLButtonElement> {
  s?: "m" | "l" | "xl";
}

const Button = ({ className, children, s = "m", ...props }: ButtonProps) => {
  const sizeProps =
    s === "m" ? "px-4 py-2" : s === "l" ? "px-4 py-4" : "px-4 py-8";
  return (
    <button
      className={`${sizeProps} text-md w-fit rounded-md bg-p text-c drop-shadow-md hover:bg-s ${className}`}
      {...(props as { type: "button" })}
    >
      {children}
    </button>
  );
};
export default Button;
