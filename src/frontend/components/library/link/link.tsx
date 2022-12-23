import { BasePropsWithChildren } from "frontend/types/types";
import NextLink from "next/link";

export interface LinkProps extends BasePropsWithChildren {
  href: string;
  external?: boolean;
  /** Pass the ref to the anchor inside the link? @default true */
  passHref?: boolean;
}

const Link = ({
  className,
  id,
  children,
  external,
  href,
  passHref = true,
}: LinkProps) => {
  return external ? (
    <a
      id={id}
      className={`${className} hover:cursor-pointer hover:font-bold hover:text-teal-800`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref={passHref}>
      <a id={id} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
