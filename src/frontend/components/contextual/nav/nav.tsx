import Button from "@components/library/button";
import Icon, { BurgerIcon, UserIcon } from "@components/library/icon";
import RoutesHelper from "@helpers/routes";
import {
  BP_PHONE,
  BP_TABLET,
  windowIsGreaterThanPhone,
  windowIsSmallerThanTablet,
} from "@styles/themes";
import AuthHelper from "frontend/helpers/auth";
import WindowHelper from "frontend/helpers/window";
import { useState } from "react";
import styled, { css } from "styled-components";

import Link from "../../library/link";

const StyledNav = styled.nav`
  background-color: ${(p) => p.theme.colors.primary.regular};
  color: ${(p) => p.theme.colors.contrast.regular};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 64px;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary.light};
`;

const LogoLink = styled(Link)`
  text-decoration: 1200;
  font-size: 24px;
  padding: 12px;
  font-weight: 800;
  &:hover {
    font-weight: normal;
    font-weight: 800;
  }
`;

const NavGroupContainer = styled.div<{ pos: "L" | "R" }>`
  padding-left: ${({ pos }) => (pos === "L" ? "16px" : 0)};
  padding-right: ${({ pos }) => (pos === "R" ? "48px" : 0)};
  margin: auto 0;
  display: flex;
  gap: 16px;
  font-weight: bold;

  @media (max-width: ${BP_PHONE}) {
    padding-right: ${({ pos }) => (pos === "R" ? "16px" : 0)};
  }
`;

const NavTextLink = styled(Link)`
  width: 80px;
  font-size: 1.1rem;
  white-space: nowrap;
  margin: auto 0;

  ${(props) =>
    props.id === "logout" &&
    css`
      padding-left: 16px;
      @media (max-width: ${BP_PHONE}) {
      }
    `};
`;

const ApplyButton = styled(Button)`
  && {
    margin-right: 64px;
    font-weight: bold;
    background-color: #e13737;
    width: 200px;

    &:hover {
      background-color: ${(p) => p.theme.colors.primary.dark};
    }

    @media (max-width: ${BP_TABLET}) {
      width: 160px;
      margin-right: 32px;
      font-size: 0.75rem;
    }
  }
`;

const StyledIcon = styled(Icon)`
  height: 100%;
`;

const ButtonIcon = styled.button`
  border: none;
  color: ${(p) => p.theme.colors.contrast.regular};
  background-color: transparent;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  background-color: ${(p) => p.theme.colors.primary.light};
  color: ${(p) => p.theme.colors.contrast.regular};
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary.lightest};
  font-weight: bold;
`;

export type NavProps = {
  className?: string;
};

const Nav = ({ className }: NavProps) => {
  const { user } = AuthHelper.useUser();
  const { width } = WindowHelper.useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTabletOrGreater = windowIsGreaterThanPhone(width);
  const isPhone = windowIsSmallerThanTablet(width);
  return (
    <>
      <StyledNav className={className}>
        <NavGroupContainer pos="L">
          <LogoLink href={RoutesHelper.routes.home()}>
            {isTabletOrGreater ? "AskConsult" : "AC"}
          </LogoLink>
        </NavGroupContainer>
        <NavGroupContainer pos="R">
          {(() => {
            if (isTabletOrGreater) {
              if (user) {
                return (
                  <>
                    <Link href={RoutesHelper.routes.applyToBeAConsultant()}>
                      <ApplyButton variant="contained">
                        Be a consultant
                      </ApplyButton>
                    </Link>
                    <Link href={RoutesHelper.routes.profile()}>
                      <StyledIcon Icon={UserIcon} />
                    </Link>
                    <NavTextLink
                      id="logout"
                      href={RoutesHelper.routes.logout()}
                    >
                      Logout
                    </NavTextLink>
                  </>
                );
              } else {
                return (
                  <>
                    <NavTextLink href={RoutesHelper.routes.authenticate()}>
                      Sign Up
                    </NavTextLink>
                    <NavTextLink href={RoutesHelper.routes.authenticate()}>
                      Login
                    </NavTextLink>
                  </>
                );
              }
            } else {
              return (
                <ButtonIcon
                  onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                >
                  <StyledIcon Icon={BurgerIcon} />
                </ButtonIcon>
              );
            }
          })()}
        </NavGroupContainer>
      </StyledNav>
      {isPhone && mobileMenuOpen && (
        <MobileMenu>
          {(() => {
            if (user) {
              return (
                <>
                  <NavTextLink
                    href={RoutesHelper.routes.applyToBeAConsultant()}
                  >
                    Apply
                  </NavTextLink>
                  <NavTextLink href={RoutesHelper.routes.profile()}>
                    My Profile
                  </NavTextLink>
                  <NavTextLink href={RoutesHelper.routes.logout()}>
                    Logout
                  </NavTextLink>
                </>
              );
            } else {
              return (
                <>
                  <NavTextLink href={RoutesHelper.routes.authenticate()}>
                    Sign Up
                  </NavTextLink>
                  <NavTextLink href={RoutesHelper.routes.authenticate()}>
                    Login
                  </NavTextLink>
                </>
              );
            }
          })()}
        </MobileMenu>
      )}
    </>
  );
};

export {};
export default Nav;
