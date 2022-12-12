import PageWrapper from "@components/contextual/page-wrapper";
import Form from "@components/library/forms/form";
import FormField from "@components/library/forms/form-field";
import FormHandler from "@components/library/forms/form-handler";
import Icon, { CheckIcon, CrossIcon, EditIcon } from "@components/library/icon";
import TRPCClient from "@helpers/api/trpc";
import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.neutral.light};
  flex-direction: column;
  max-width: 800px;
  margin: 64px 32px;
  padding: ${(p) => p.theme.space.xlarge};
  gap: ${(p) => p.theme.space.medium};
`;

const ProfileHeader = styled.h2`
  text-align: center;
`;

const Control = styled.div`
  display: flex;
  padding-top: 16px;
  width: 100%;
  flex-direction: row-reverse;
  gap: 32px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const ToggleEditButton = styled.button`
  background-color: none;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;

  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.primary.extradark};
  }
`;

const CancelButton = styled.button`
  background-color: none;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;

  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.primary.extradark};
  }
`;
const StyledEditIcon = styled(Icon)``;
const StyledCancelIcon = styled(Icon)``;

// TODO: Make sure this works properly
export default function MePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const formRef = useRef();
  const toggledEdit = () => setIsEditing(!isEditing);
  const cancelEdit = () => {
    setIsEditing(false);
  };
  const getProfileQuery = TRPCClient.customers.getMyProfile.useQuery();
  const { mutate: updateProfile, isLoading } =
    TRPCClient.customers.updateMyProfile.useMutation();

  return (
    <PageWrapper>
      {!getProfileQuery.isLoading && (
        <Container>
          <ProfileHeader>Profile</ProfileHeader>
          <FormHandler
            innerRef={formRef}
            enableReinitialize
            initialValues={{
              email: getProfileQuery.data?.result?.email,
              name: getProfileQuery.data?.result?.fullName,
            }}
            onSubmit={async (values) => {
              await updateProfile({
                profile: { name: values.name },
              });
              setName(name);
            }}
          >
            {(formik) => (
              <Form>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormField
                  id="email"
                  name="email"
                  type="email"
                  disabled={true}
                />
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormField id="name" name="name" disabled={!isEditing} />
                <Control>
                  <CancelButton
                    type="button"
                    onClick={() => {
                      formik.resetForm();
                      cancelEdit();
                    }}
                  >
                    {isEditing && <StyledCancelIcon Icon={CrossIcon} />}
                  </CancelButton>
                  <ToggleEditButton
                    type={!isEditing ? "submit" : "button"}
                    disabled={isLoading}
                    onClick={toggledEdit}
                  >
                    <StyledEditIcon Icon={isEditing ? CheckIcon : EditIcon} />
                  </ToggleEditButton>
                </Control>
              </Form>
            )}
          </FormHandler>
        </Container>
      )}
    </PageWrapper>
  );
}
