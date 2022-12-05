import PageWrapper from "@components/contextual/page-wrapper";
import ConsultantModel from "@models/consultant/consultant";
import RoutingHelper from "frontend/helpers/routing";
import { useEffect, useState } from "react";
import styled from "styled-components";

export interface BookConsultantProps {
  className?: string;
}

const BookConsultantPage = ({ className }: BookConsultantProps) => {
  const [consultant, setConsultant] = useState<ConsultantModel>();
  const router = RoutingHelper.useRouter();
  const { consultantId } = RoutingHelper.usePathParams(router);

  return <PageWrapper className={className}></PageWrapper>;
};

export default BookConsultantPage;
