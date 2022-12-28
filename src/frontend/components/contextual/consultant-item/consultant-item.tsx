import { LOREM_IPSUM } from "@common/constant";
import Button from "@components/library/button";
import Card from "@components/library/card";
import Link from "@components/library/link";
import Rating from "@components/library/rating";
import RoutesHelper from "@helpers/routes";
import { ConsultantResult } from "@models/consultant";
import {
  BP_LAPTOP_INT,
  BP_PHONE_INT,
  BP_TABLET,
  BP_TABLET_INT,
  windowIsSmallerThanTablet,
} from "@styles/themes";
import WindowHelper from "frontend/helpers/window";
import { BaseProps } from "frontend/types/types";
import styled from "styled-components";

import ConsultantAvatar from "../consultant-avatar";

const ConsultantContainer = styled(Card)`
  min-width: 280px;
  background-color: ${(p) => p.theme.colors.primary.lightest};
  padding: 32px;
  display: flex;
  gap: 32px;
`;

const ConsultantContainerLeftSide = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${BP_TABLET}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const ConsultantDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TagLine = styled.span`
  font-weight: bold;
`;

const NameOccupation = styled.span`
  color: ${(p) => p.theme.colors.neutral.dark};
  font-weight: 500;
`;

const Description = styled.p`
  max-height: 300px;
  @media (max-width: ${BP_TABLET}) {
    font-size: 0.75rem;
  }
`;

const BookConsultant = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
`;

const Rate = styled.span`
  font-weight: bold;
`;

const RateUnit = styled.p`
  font-size: 0.85rem;
  white-space: nowrap;
`;

const BookButton = styled(Button)`
  && {
    width: 120px;
    &:hover {
      background-color: ${(p) => p.theme.colors.primary.dark};
    }
  }
`;

interface ConsultantItemProps extends BaseProps {
  consultant: ConsultantResult;
}
// TODO: How do we get the types from the API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConsultantItem = ({ className, id, consultant }: ConsultantItemProps) => {
  const { width } = WindowHelper.useWindowSize();
  const maxDescriptionSize = (() => {
    if (width < BP_PHONE_INT) return 200;
    if (width < BP_TABLET_INT) return 300;
    if (width < BP_LAPTOP_INT) return 400;
    return 500;
  })();
  const isSmallerThanTablet = windowIsSmallerThanTablet(width);
  return (
    <ConsultantContainer key={consultant.id} className={className} id={id}>
      <ConsultantContainerLeftSide>
        <ConsultantAvatar avatarURL={consultant.avatarURL} />
        <ConsultantDetail>
          <TagLine>
            Ex. Google, Ex. LinkedIn, Ex. Twitter Software Architect
          </TagLine>
          <NameOccupation>
            {consultant.name} | {consultant.occupation}
          </NameOccupation>
          <Description>
            {LOREM_IPSUM.length > maxDescriptionSize
              ? LOREM_IPSUM.slice(0, maxDescriptionSize - 3) + "..."
              : LOREM_IPSUM}
          </Description>
        </ConsultantDetail>
        {isSmallerThanTablet && <BookButton>£2.00 per Hour</BookButton>}
        {/* TODO: Bug with rating aria label */}
        {isSmallerThanTablet && <Rating precision={0.25} readOnly value={3} />}
      </ConsultantContainerLeftSide>
      {!isSmallerThanTablet && (
        <BookConsultant>
          <div>
            <Rate>£2.00</Rate>
            <RateUnit>Per hour</RateUnit>
          </div>
          <Link href={RoutesHelper.routes.bookConsultant(consultant.id)}>
            <BookButton className="bg-p-700">Book</BookButton>
          </Link>
          <Rating
            precision={0.25}
            readOnly
            value={Math.floor(Math.random() * 10) + 1}
          />
        </BookConsultant>
      )}
    </ConsultantContainer>
  );
};

export default ConsultantItem;
