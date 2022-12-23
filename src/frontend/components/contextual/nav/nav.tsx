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

const TW_NAV_LINK = "w-16 whitespace-nowrap my-auto hover:text-teal-700";

const Nav = ({ className }: BaseProps) => {
  const { user } = AuthHelper.useUser();
  const { width } = WindowHelper.useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTabletOrGreater = windowIsGreaterThanPhone(width);
  const isPhone = windowIsSmallerThanTablet(width);
  return (
    <>
      <nav
        className={`bg-teal-500 text-white flex flex-row justify-between h-16 border-b-1 border-b-teal-300 ${className}`}
      >
        <div className="pl-2 my-auto flex gap-4 font-bold">
          <Link
            className="text-2xl p-3 text-bold hover:text-teal-700"
            href={RoutesHelper.routes.home()}
          >
            {isTabletOrGreater ? "AskConsult" : "AC"}
          </Link>
        </div>
        <div className="pr-4 sm:pr-12 my-auto flex gap-4 font-bold">
          {(() => {
            if (isTabletOrGreater) {
              if (user) {
                return (
                  <>
                    <Link href={RoutesHelper.routes.applyToBeAConsultant()}>
                      <Button className="mr-16 font-bold bg-red-600 w-48 md:w-40 md:mr-8 hover:bg-teal-600">
                        Be a consultant
                      </Button>
                    </Link>
                    <Link
                      className="hover:text-teal-700"
                      href={RoutesHelper.routes.profile()}
                    >
                      <Icon className="h-full" Icon={UserIcon} />
                    </Link>
                    <Link
                      className="w-16 whitespace-nowrap my-auto hover:text-teal-700 pl-4"
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
                  className="border-0 text-white bg-transparent text-center text-lg"
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
        <div className="bg-teal-300 text-white p-4 flex flex-col border-b-1 border-teal-200 font-bold">
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
