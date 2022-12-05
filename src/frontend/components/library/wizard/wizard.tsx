import styled from "styled-components";

import _NextArrow from "../next-arrow";
import ActionConfirm from "./action-confirm";
import ActionQuery from "./action-query";
import ActionShow from "./action-show";
import { WizardAction } from "./wizard-action-factory";
import _WizardLegend from "./wizard-legend";

const CompanyHeading = styled.h1`
  font-size: ${(p) => p.theme.fontSizes["3xl"]};
  width: 100%;
  text-align: center;
`;

const WizardContainer = styled.div`
  display: flex;
`;

const WizardAsideContainer = styled.aside`
  background-color: ${(p) => p.theme.colors.primary.lightest};
  display: flex;
  flex-direction: column;
  padding: 200px 0px;
  align-items: center;
  width: 35%;
`;

const WizardActionContainer = styled.main`
  background-color: ${(p) => p.theme.colors.neutral.light};
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space.xlarge};
  width: 65%;
`;

const WizardLegend = styled(_WizardLegend)`
  margin-top: ${(p) => p.theme.space.large};
`;

const ActionWrapper = styled.div<{ hasNext: boolean }>`
  width: 480px;
  margin-right: ${(p) => (p.hasNext ? "initial" : `${32 + 50}px`)};
  padding: 50px 0px;
`;

const NextArrow = styled(_NextArrow)`
  margin-top: 300px;
  align-self: baseline;
`;

export type ActionProps = {
  consultantId: string;
};

export type WizardProps = {
  consultantId: string;
  action: WizardAction;
};

const STEPS = ["Show", "Query", "Confirm"];

const Wizard = ({ action, consultantId }: WizardProps) => {
  const Action = {
    Show: ActionShow,
    Query: ActionQuery,
    Confirm: ActionConfirm,
  }[action.name];

  return (
    <WizardContainer>
      <WizardAsideContainer>
        <CompanyHeading>AskConsult</CompanyHeading>
        <WizardLegend items={STEPS} active={STEPS.indexOf(action.name)} />
      </WizardAsideContainer>
      <WizardActionContainer>
        {action.previous && (
          <NextArrow
            size={50}
            href={action.previous.href}
            label={action.previous.label}
            direction="left"
          />
        )}
        <ActionWrapper hasNext={!!action.next}>
          <Action consultantId={consultantId} />
        </ActionWrapper>
        {action.next && (
          <NextArrow
            size={50}
            href={action.next.href}
            label={action.next.label}
            direction="right"
          />
        )}
      </WizardActionContainer>
    </WizardContainer>
  );
};

export default Wizard;
