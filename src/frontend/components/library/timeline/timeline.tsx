import styled from "styled-components";

const Section = styled.div``;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConnectorWrapper = styled.div`
  width: 30px;
`;

const Connector = styled.div`
  background-color: ${(p) => p.theme.colors.neutral.light};
  width: 2px;
  height: 25px;
  margin: auto;
`;

const Node = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space.medium};
`;

const NodeLabel = styled.span`
  line-height: 30px;
`;

const NodeOrb = styled.div<{ active: boolean }>`
  background-color: ${(p) =>
    p.active ? p.theme.colors.primary.dark : p.theme.colors.primary.extralight};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: ${(p) => p.theme.colors.contrast.regular};
  flex-shrink: 0;
`;

export type TimelineProps = {
  items: string[];
  active?: number;
};

const Timeline = ({ items = [], active }: TimelineProps) => {
  return (
    <TimelineContainer>
      {items.map((label, index) => {
        return (
          <Section key={index}>
            {index ? (
              <ConnectorWrapper>
                <Connector />{" "}
              </ConnectorWrapper>
            ) : (
              ""
            )}
            <Node>
              <NodeOrb active={active === index}>{index + 1}</NodeOrb>
              <NodeLabel>{label}</NodeLabel>
            </Node>
          </Section>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
