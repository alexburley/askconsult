import PageWrapper from "@components/contextual/page-wrapper";
import Button from "@components/library/button";
import Form from "@components/library/forms/form";
import FormField from "@components/library/forms/form-field";
import FormHandler from "@components/library/forms/form-handler";
import API from "@helpers/api";
import RoutesHelper from "@helpers/routes";
import { BP_TABLET } from "@styles/themes";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  @media (max-width: ${BP_TABLET}) {
    flex-direction: column;
  }
  height: 100%;
`;

const FormContainer = styled.div`
  min-width: 60%;
  text-align: center;
  padding: 48px 32px 32px 32px;
`;

const StyledApplicationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space.medium};
`;

const StyledApplyButton = styled(Button)`
  margin-top: ${(p) => p.theme.space.medium};
  && {
    font-weight: bold;
    background-color: ${(p) => p.theme.colors.primary.light};
    min-width: 80px;
    max-width: 160px;
    margin: 8px auto;

    &:hover {
      background-color: ${(p) => p.theme.colors.primary.dark};
    }
  }
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const HowItWorks = styled.div`
  flex-shrink: 2;
  min-width: 40%;
  background-color: ${(p) => p.theme.colors.primary.lightest};
  padding: 32px;
`;

const HowItWorksHeader = styled.h2`
  padding: 16px 0px;
`;
const ApplyHeader = styled.h1`
  padding-bottom: 16px;
`;

const ProcessList = styled.ul`
  text-align: left;
`;

const ProcessItem = styled.li`
  padding: ${(p) => p.theme.space.medium};
  > * {
    &:first-child {
      padding-top: 0px;
    }
  }
`;

const ApplyToBeConsultantPage = () => {
  const router = RoutesHelper.useRouter();
  const { mutate: sendConsultantApplication } =
    API.consultants.sendConsultantApplication.useMutation();

  const onSubmit = (values) => {
    sendConsultantApplication({
      application: {
        name: values.name,
        email: values.email,
        occupation: values.occupation,
        background: values.background,
        expectedRate: values.expectedRate,
      },
    });
    router.push(RoutesHelper.routes.home());
  };

  return (
    <PageWrapper noPad={true}>
      <Container>
        <HowItWorks>
          <ApplyHeader>Consultant Applications</ApplyHeader>
          <p>
            To apply to be a consultant, all you need to is submit this form.
            Since you are logged in already, we will simply get in touch with
            you to take some details and provision you on the platform.
          </p>
          <HowItWorksHeader>How it Works</HowItWorksHeader>
          <p>
            During these early days of askconsult, there will be a bespoke
            onboarding process:
          </p>
          <ProcessList>
            <ProcessItem>
              You apply here, filling in the form to give us some background on
              yourself and your expectations.
            </ProcessItem>
            <ProcessItem>
              We review your application and arrange a video call via email. You
              will be one of our first batch of consultants and so we want to
              make sure you&apos;re prepared for that.
            </ProcessItem>
            <ProcessItem>
              Following a successful video call we will get you onboarded to the
              consultants index.
            </ProcessItem>
          </ProcessList>
        </HowItWorks>
        <FormContainer>
          <FormHandler initialValues={{}} onSubmit={onSubmit}>
            <StyledApplicationForm>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormField id="email" name="email" />
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormField id="name" name="name" />
              <FormLabel htmlFor="occupation">Current Occupation</FormLabel>
              <FormField id="occupation" name="occupation" />
              <FormLabel htmlFor="background">
                Background (Any helpful experience)
              </FormLabel>
              <FormField
                id="background"
                name="background"
                component="textarea"
                rows="4"
              />
              <FormLabel htmlFor="expectedRate">Expected hourly rate</FormLabel>
              <FormField id="expectedRate" name="expectedRate" />
              <StyledApplyButton type="submit">Apply!</StyledApplyButton>
            </StyledApplicationForm>
          </FormHandler>
        </FormContainer>
      </Container>
    </PageWrapper>
  );
};

export default ApplyToBeConsultantPage;
