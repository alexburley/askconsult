import styled from "styled-components";

import Timeline from "../timeline";

export interface WizardLegendProps {
  className?: string;
  active?: number;
  items: string[];
}

const WizardLegendContainer = styled.div``;

const WizardLegend = ({ className, active, items }: WizardLegendProps) => {
  return (
    <WizardLegendContainer className={className}>
      <Timeline active={active} items={items} />
    </WizardLegendContainer>
  );
};

export default WizardLegend;
