import Button from "@components/library/button";
import Icon, { BurgerIcon, UserIcon } from "@components/library/icon";
import Link from "@components/library/link";
import RoutesHelper from "@helpers/routes";
import {
  windowIsGreaterThanPhone,
  windowIsSmallerThanTablet,
} from "@styles/themes";
import AuthHelper from "frontend/helpers/auth";
import WindowHelper from "frontend/helpers/window";
import { BaseProps } from "frontend/types/types";
import { useState } from "react";

const TW_NAV_LINK = "w-16 whitespace-nowrap my-auto hover:text-p-700";

const Nav = ({ className }: BaseProps) => {
  const { user } = AuthHelper.useUser();
  const { width } = WindowHelper.useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTabletOrGreater = windowIsGreaterThanPhone(width);
  const isPhone = windowIsSmallerThanTablet(width);
  return (
    <>
      <nav
        className={`border-b-1 flex h-16 flex-row justify-between border-b-p-300 bg-p-500 text-white ${className}`}
      >
        <div className="my-auto flex gap-4 pl-2 font-bold">
          <Link
            className="text-bold p-3 text-2xl hover:text-p-700"
            href={RoutesHelper.routes.home()}
          >
            {isTabletOrGreater ? "AskConsult" : "AC"}
          </Link>
        </div>
        <div className="my-auto flex gap-4 pr-4 font-bold sm:pr-12">
          {(() => {
            if (isTabletOrGreater) {
              if (user) {
                return (
                  <>
                    <Link href={RoutesHelper.routes.applyToBeAConsultant()}>
                      <Button className="mr-16 w-48 bg-red-600 font-bold hover:bg-p-600 md:mr-8 md:w-40">
                        Be a consultant
                      </Button>
                    </Link>
                    <Link
                      className="hover:text-p-700"
                      href={RoutesHelper.routes.profile()}
                    >
                      <Icon className="h-full" Icon={UserIcon} />
                    </Link>
                    <Link
                      className="my-auto w-16 whitespace-nowrap pl-4 hover:text-p-700"
                      id="logout"
                      href={RoutesHelper.routes.logout()}
                    >
                      Logout
                    </Link>
                  </>
                );
              } else {
                return (
                  <>
                    <Link
                      className={TW_NAV_LINK}
                      href={RoutesHelper.routes.authenticate()}
                    >
                      Sign Up
                    </Link>
                    <Link
                      className={TW_NAV_LINK}
                      href={RoutesHelper.routes.authenticate()}
                    >
                      Login
                    </Link>
                  </>
                );
              }
            } else {
              return (
                <button
                  className="border-0 bg-transparent text-center text-lg text-white"
                  onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                >
                  <Icon Icon={BurgerIcon} />
                </button>
              );
            }
          })()}
        </div>
      </nav>
      {isPhone && mobileMenuOpen && (
        <div className="border-b-1 flex flex-col border-p-200 bg-p-300 p-4 font-bold text-white">
          {(() => {
            if (user) {
              return (
                <>
                  <Link
                    className={TW_NAV_LINK}
                    href={RoutesHelper.routes.applyToBeAConsultant()}
                  >
                    Apply
                  </Link>
                  <Link
                    className={TW_NAV_LINK}
                    href={RoutesHelper.routes.profile()}
                  >
                    My Profile
                  </Link>
                  <Link
                    className={TW_NAV_LINK}
                    href={RoutesHelper.routes.logout()}
                  >
                    Logout
                  </Link>
                </>
              );
            } else {
              return (
                <>
                  <Link
                    className={TW_NAV_LINK}
                    href={RoutesHelper.routes.authenticate()}
                  >
                    Sign Up
                  </Link>
                  <Link
                    className={TW_NAV_LINK}
                    href={RoutesHelper.routes.authenticate()}
                  >
                    Login
                  </Link>
                </>
              );
            }
          })()}
        </div>
      )}
    </>
  );
};

export {};
export default Nav;
