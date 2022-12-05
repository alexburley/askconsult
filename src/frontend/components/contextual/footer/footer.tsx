import Link from "@components/library/link";
import { BP_PHONE } from "@styles/themes";
import styled from "styled-components";

import SITE_MAP_ITEMS from "./site-map-items";

const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.neutral.light};
  border-top: 1px solid ${(p) => p.theme.colors.primary.light};
  color: ${(p) => p.theme.colors.contrast.inverse.regular};
  font-weight: ${(p) => p.theme.fontWeights.light};
  display: flex;
  flex-direction: column;
  margin-top: auto;

  @media (max-width: ${BP_PHONE}) {
    text-align: center;
  }
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
  gap: 48px;
  @media (max-width: ${BP_PHONE}) {
    padding: 20px 40px;
    flex-flow: column;
  }
`;

const RightTopFooter = styled.div`
  margin: 0 auto;
`;
const ContactUs = styled.div`
  width: 200px;
`;
const EmailLink = styled.span`
  font-weight: bolder;
  color: ${(p) => p.theme.colors.primary.extradark};
`;

const SiteMap = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 16px;
  padding-left: 16px;
  color: ${(p) => p.theme.colors.contrast.inverse.regular};

  @media (max-width: ${BP_PHONE}) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
  }
`;

const SiteMapAreaContainer = styled.div`
  width: 160px;
`;

const SiteMapAreaHeader = styled.h3`
  font-weight: lighter;
  letter-spacing: 1px;
`;
const SiteMapAreaList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 16px 0px 0px 0px;
`;
const SiteMapAreaItem = styled.li``;

const BottomFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${(p) => p.theme.colors.primary.light};
  padding: 16px;
  margin: auto;
  text-align: center;
`;

const Copyright = styled.span``;
const AllRights = styled.span``;

export type FooterProps = Record<string, unknown>;
const Footer = (props_: FooterProps) => {
  return (
    <FooterContainer>
      <TopFooter>
        <SiteMap>
          {SITE_MAP_ITEMS.map(([header, list]) => (
            <SiteMapAreaContainer key={header}>
              <SiteMapAreaHeader>{header}</SiteMapAreaHeader>
              <SiteMapAreaList>
                {list.map(([title, href, opts = {}]) => (
                  <SiteMapAreaItem key={title}>
                    <Link href={href} external={opts.external}>
                      {title}
                    </Link>
                  </SiteMapAreaItem>
                ))}
              </SiteMapAreaList>
            </SiteMapAreaContainer>
          ))}
        </SiteMap>
        <RightTopFooter>
          <ContactUs>
            <p>
              <b>Need to get in touch?</b>
            </p>
            <br />
            <p>
              Contact us at <EmailLink>support@askconsult.io</EmailLink>
            </p>
          </ContactUs>
        </RightTopFooter>
      </TopFooter>
      <BottomFooter>
        <Copyright>Copyright © askconsult.io 2022. </Copyright>
        <AllRights>All Rights Reserved.</AllRights>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
