import { useSiteStore } from "frontend/helpers/site-store";
import styled from "styled-components";

import _TextField from "../text-field";
import { ActionProps } from "./wizard";

export interface ActionQueryProps extends ActionProps {
  className?: string;
}

const ActionQueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space.large};
`;

const TextField = styled(_TextField)`
  width: 100%;
`;
const ActionTitle = styled.h2`
  text-align: center;
`;
const ActionDescription = styled.p``;

const ActionQuery = ({ className }: ActionQueryProps) => {
  const { query, setQuery } = useSiteStore();
  return (
    <ActionQueryContainer className={className}>
      <ActionTitle>Write your query!</ActionTitle>
      <ActionDescription></ActionDescription>
      <TextField
        value={query}
        placeholder="Type your query here..."
        multiline
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </ActionQueryContainer>
  );
};

export default ActionQuery;
