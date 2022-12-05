import Consultant from "@models/consultant/consultant";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { ActionProps } from "./wizard";

export interface ActionShowProps extends ActionProps {
  className?: string;
  consultantId: string;
}

const ActionShowContainer = styled.div`
  max-height: 800px;
`;

const ActionShow = ({ className, consultantId }: ActionShowProps) => {
  const [consultant, setConsultant] = useState<Consultant>();
  return <ActionShowContainer className={className}></ActionShowContainer>;
};

export default ActionShow;
