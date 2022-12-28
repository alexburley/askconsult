import PageWrapper from "@components/contextual/page-wrapper";
import Image from "@components/library/image";
import { BaseProps } from "frontend/types/types";

const HomePage = (props_: BaseProps) => {
  return (
    <PageWrapper>
      <div className="overflow-hidden">
        {/* <Image
          layout="fill"
          src="/images/june-standing.svg"
          alt="Standing Woman"
        /> */}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
