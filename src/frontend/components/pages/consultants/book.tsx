import PageWrapper from "@components/contextual/page-wrapper";
import ConsultantModel from "@models/consultant/consultant";
import RoutingHelper from "frontend/helpers/routing";
import { useEffect, useState } from "react";
import styled from "styled-components";

export interface BookConsultantProps {
  className?: string;
}

const WizardStepContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primary.light};
  width: fit-content;
  margin: auto;
  padding: 16px 32px;
  gap: 16px;
`;
const WizardStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
`;

const WizardStepNumber = styled.div`
  background-color: ${(p) => p.theme.colors.primary.dark};
  border-radius: 50%;
  text-align: center;
  width: 40px;
  font-size: 24px;
  height: 40px;
`;
const WizardStepText = styled.span``;

const BookConsultantPage = ({ className }: BookConsultantProps) => {
  const [consultant, setConsultant] = useState<ConsultantModel>();
  const router = RoutingHelper.useRouter();
  const { consultantId } = RoutingHelper.usePathParams(router);

  return (
    <PageWrapper className={className}>
      <WizardStepContainer>
        {[
          { step: 1, name: "Query" },
          { step: 2, name: "Pay" },
          { step: 3, name: "Confirm" },
        ].map(({ step, name }) => (
          <WizardStep key={step}>
            <WizardStepNumber>{step}</WizardStepNumber>
            <WizardStepText>{name}</WizardStepText>
          </WizardStep>
        ))}
      </WizardStepContainer>
    </PageWrapper>
  );
};

export default BookConsultantPage;
