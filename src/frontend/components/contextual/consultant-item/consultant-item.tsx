import { LOREM_IPSUM } from "@common/constant";
import Button from "@components/library/button";
import Card from "@components/library/card";
import Image from "@components/library/image";
import Link from "@components/library/link";
import Rating from "@components/library/rating";
import { ConsultantResult } from "@models/consultant";
import {
  BP_LAPTOP_INT,
  BP_PHONE_INT,
  BP_TABLET,
  BP_TABLET_INT,
  windowIsSmallerThanTablet,
} from "@styles/themes";
import RoutingHelper from "frontend/helpers/routing";
import WindowHelper from "frontend/helpers/window";
import styled from "styled-components";

import Headshot from "../../../../../public/images/headshot-example.jpg";

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

const Avatar = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 200px;
  height: 200px;
  margin: ${(p) => p.theme.space.medium} 0px;
  img {
    border-radius: 8px;
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

const ConsultantItem = ({ consultant }: { consultant: ConsultantResult }) => {
  const { width } = WindowHelper.useWindowSize();
  const maxDescriptionSize = (() => {
    if (width < BP_PHONE_INT) return 200;
    if (width < BP_TABLET_INT) return 300;
    if (width < BP_LAPTOP_INT) return 400;
    return 500;
  })();
  const isSmallerThanTablet = windowIsSmallerThanTablet(width);
  return (
    <ConsultantContainer key={consultant.id}>
      <ConsultantContainerLeftSide>
        <Avatar>
          <Image src={Headshot} alt="headshot"></Image>
        </Avatar>
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
        {isSmallerThanTablet && (
          <BookButton variant="contained">£2.00 per Hour</BookButton>
        )}
        {/* TODO: Bug with rating aria label */}
        {isSmallerThanTablet && <Rating precision={0.25} readOnly value={3} />}
      </ConsultantContainerLeftSide>
      {!isSmallerThanTablet && (
        <BookConsultant>
          <div>
            <Rate>£2.00</Rate>
            <RateUnit>Per hour</RateUnit>
          </div>
          <Link href={RoutingHelper.routes.showConsultant(consultant.id)}>
            <BookButton variant="contained">Book</BookButton>
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
