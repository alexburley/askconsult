import { BasePropsWithChildren } from "frontend/types/types";
import NextLink from "next/link";
import styled from "styled-components";

const StyledAnchor = styled.a`
  &:hover {
    font-weight: bolder;
    color: ${(p) => p.theme.colors.primary.extradark};
    cursor: pointer;
  }
`;

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
    <StyledAnchor id={id} className={className} href={href} target="_blank">
      {children}
    </StyledAnchor>
  ) : (
    <NextLink href={href} passHref={passHref}>
      <StyledAnchor id={id} className={className}>
        {children}
      </StyledAnchor>
    </NextLink>
  );
};

export default Link;
