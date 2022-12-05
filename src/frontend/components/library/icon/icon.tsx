import * as feather from "react-feather";
export interface IconProps extends feather.IconProps {
  className?: string;
  Icon: feather.Icon;
}

const Icon = ({ className, Icon, ...props }: IconProps) => {
  return <Icon className={className} {...props}></Icon>;
};

export default Icon;
