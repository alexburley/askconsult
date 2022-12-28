// TODO: Fix this
/* eslint-disable @next/next/no-img-element */
import PageWrapper from "@components/contextual/page-wrapper";
import Button from "@components/library/button";
import { BaseProps } from "frontend/types/types";

const HomePage = (props_: BaseProps) => {
  return (
    <PageWrapper>
      <div className="bg-c p-4 sm:p-8">
        <div className="mx-auto flex flex-col gap-12 sm:max-w-4xl">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="sm-hide mx-auto max-w-sm pr-4">
              <img
                className="w-[180px]"
                src="/images/june-standing-no-bg.svg"
                alt="A Standing Consultant"
              />
            </div>
            <div className="flex max-w-lg flex-col gap-4">
              <h1 className="text-4xl">
                Get expert knowledge at the click of a button
              </h1>
              <h2>
                Within minutes you search our pre-approved list of industry
                experts, celebrities and average joes to get the answers you
                need, at a fixed fee.
              </h2>
              <Button>Consultant Index</Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <div className="flex max-w-lg flex-col gap-4">
              <h1 className=" text-4xl">Excerpt B</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur libero id faucibus nisl tincidunt eget nullam non
                nisi. Euismod nisi porta lorem mollis aliquam ut porttitor.
              </h2>
              <Button>Consultant Index</Button>
            </div>
            <div className="w-full max-w-md sm:max-w-sm">
              <img
                className="mx-auto w-[320px] sm:ml-auto sm:mr-0"
                src="/images/couch.svg"
                alt="A couch"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <div className="sm-hide sm:mx-auto sm:min-w-[180px]">
              <img
                className="h-[180px]"
                src="/images/phone.svg"
                alt="A Standing Consultant"
              />
            </div>
            <div className="flex max-w-lg flex-col gap-4">
              <h1 className=" text-4xl">Except C</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur libero id faucibus nisl tincidunt eget nullam non
                nisi. Euismod nisi porta lorem mollis aliquam ut porttitor.
              </h2>
              <Button>Consultant Index</Button>
            </div>
            <div className="flex flex-row items-center sm:hidden md:block">
              <div className="mx-auto sm:pr-2">
                <img
                  className="w-[180px]"
                  src="/images/laptop.svg"
                  alt="A Standing Consultant"
                />
              </div>
              <div className="sm:hidden">
                <img
                  className="w-[180px]"
                  src="/images/phone.svg"
                  alt="A Standing Consultant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
