import styled from "styled-components";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "../icon";
import Link from "../link";

export interface NextArrowProps {
  className?: string;
  direction: "right" | "left";
  size: number;
  href: string;
  label: string;
}

const NextArrowContainer = styled.div<{ size: number }>`
  cursor: pointer;
  color: ${(p) => p.theme.colors.neutral.dark};
  &:hover {
    color: ${(p) => p.theme.colors.contrast.inverse.regular};
  }
`;

const ArrowLabel = styled.span`
  text-align: left;
`;
const ArrowInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.space.small};
`;

const NextArrow = ({
  className,
  direction,
  href,
  size,
  label,
}: NextArrowProps) => {
  const ArrowIcon =
    direction === "right" ? ArrowRightCircleIcon : ArrowLeftCircleIcon;
  return (
    <NextArrowContainer className={className} size={size}>
      <Link href={href} passHref>
        <ArrowInnerContainer>
          <ArrowIcon height={size} width={size}></ArrowIcon>
          <ArrowLabel>{label}</ArrowLabel>
        </ArrowInnerContainer>
      </Link>
    </NextArrowContainer>
  );
};

export default NextArrow;
