import ConsultantAvatar from "@components/contextual/consultant-avatar";
import PageWrapper from "@components/contextual/page-wrapper";
import Button from "@components/library/button";
import Form from "@components/library/forms/form";
import FormField from "@components/library/forms/form-field";
import FormHandler from "@components/library/forms/form-handler";
import API from "@helpers/api";
import RoutesHelper from "@helpers/routes";
import { useSiteStore } from "@helpers/site-store";
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

const ConsultantContainer = styled.div`
  flex-shrink: 2;
  min-width: 40%;
  background-color: ${(p) => p.theme.colors.primary.lightest};
  padding: 32px;

  @media (max-width: ${BP_TABLET}) {
    flex-direction: row;
  }
`;
// TODO: Neaten this page
const BookConsultantPage = () => {
  const router = RoutesHelper.useRouter();
  const { consultantId } = RoutesHelper.usePathParams(router);
  const { booking, setBooking } = useSiteStore();
  const consultantQuery = API.consultants.getConsultantByID.useQuery({
    id: consultantId,
  });
  const onSubmit = (values) => {
    setBooking(values);
    router.push(RoutesHelper.routes.payForBooking(consultantId));
  };

  return (
    <PageWrapper noPad={true}>
      <Container>
        <ConsultantContainer>
          {consultantQuery.data && (
            <>
              <ConsultantAvatar
                avatarURL={consultantQuery.data.result.avatarURL}
              />
              <h2>{consultantQuery.data.result.name}</h2>
              <h3>{consultantQuery.data.result.description}</h3>
            </>
          )}
        </ConsultantContainer>
        <FormContainer>
          <FormHandler initialValues={booking} onSubmit={onSubmit}>
            <StyledApplicationForm>
              <FormLabel htmlFor="query">Query</FormLabel>
              <FormField id="query" name="query" />
              <FormLabel htmlFor="callLength">
                Session Length (Minutes)
              </FormLabel>
              <FormField id="callLength" name="callLength" />
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <FormField id="fullName" name="fullName" />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormField id="email" name="email" />
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormField id="phone" name="phone" />
              <StyledApplyButton type="submit">Book and Pay!</StyledApplyButton>
            </StyledApplicationForm>
          </FormHandler>
        </FormContainer>
      </Container>
    </PageWrapper>
  );
};

export default BookConsultantPage;
