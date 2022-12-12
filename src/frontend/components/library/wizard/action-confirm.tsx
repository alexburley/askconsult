import RoutesHelper from "@helpers/routes";
import { useSiteStore } from "frontend/helpers/site-store";
import { useState } from "react";
import styled from "styled-components";

import Box from "../box";
import _Button from "../button";
import { CheckCircleIcon, CrossCircleIcon } from "../icon";
// import LinkedIcon from "../linked-icon";
import Modal from "../modal";
import TextField from "../text-field";
import { ActionProps } from "./wizard";

export interface ActionConfirmProps extends ActionProps {
  className?: string;
}

const ActionConfirmContainer = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space.xlarge};
  flex-direction: column;
`;

const ConfirmTitle = styled.h2`
  align-self: center;
`;

const QueryContainer = styled.p<{ expanded: boolean }>`
  background-color: ${(p) => p.theme.colors.neutral.regular};
  padding: ${(p) => p.theme.space.large};
  border-radius: 14px;
  overflow: ${(p) => (p.expanded ? "inherit" : "hidden")};
  max-height: ${(p) => (p.expanded ? "inherit" : "50vh")};
  cursor: pointer;
`;

const SubmitButton = styled(_Button)``;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  text-align: center;
  background-color: grey;
  border: 2px solid ${(p) => p.theme.colors.neutral.darker};
  padding: ${(p) => p.theme.space.large};
  color: ${(p) => p.theme.colors.contrast.regular};
`;

const ModalText = styled.p`
  margin-bottom: ${(p) => p.theme.space.large};
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space.xlarge};
`;

const ActionConfirm = ({ className, consultantId }: ActionConfirmProps) => {
  const { query } = useSiteStore();
  const router = RoutesHelper.useRouter();
  const [queryExpanded, setQueryExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    handleClose();
  };
  return (
    <ActionConfirmContainer className={className}>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <ModalText>Are you sure you want to submit this query?</ModalText>
          <ModalContainer>
            {/* <LinkedIcon
              onClick={handleClose}
              Icon={CrossCircleIcon}
              size={25}
            />
            <LinkedIcon
              onClick={handleSubmit}
              Icon={CheckCircleIcon}
              size={25}
            /> */}
          </ModalContainer>
        </ModalBox>
      </Modal>
      <ConfirmTitle>Confirm Query</ConfirmTitle>
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        label="Email"
        variant="standard"
      />
      <QueryContainer
        expanded={queryExpanded}
        onClick={() => {
          setQueryExpanded(!queryExpanded);
        }}
      >
        {query}
      </QueryContainer>
      <SubmitButton onClick={handleOpen} variant="contained">
        Submit
      </SubmitButton>
    </ActionConfirmContainer>
  );
};

export default ActionConfirm;
