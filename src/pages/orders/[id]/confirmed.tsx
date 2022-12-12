import PageWrapper from "@components/contextual/page-wrapper";
import Button from "@components/library/button";
import _Card from "@components/library/card";
import RoutesHelper from "@helpers/routes";
import styled from "styled-components";

const Card = styled(_Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(p) => p.theme.space.xlarge} auto;
  gap: ${(p) => p.theme.space.large};
  padding: 48px;
  background-color: ${(p) => p.theme.colors.primary.lightest};
  max-width: 800px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const LargeText = styled.h2``;
const SubText = styled.div`
  text-align: center;
  max-width: 400px;
`;

const SubTextParagraph = styled.p`
  margin: ${(p) => p.theme.space.large} 0;
`;

const CelebrationIcon = styled.span`
  font-size: 80px;
`;

export default function QueryConsultantPage() {
  const router = RoutesHelper.useRouter();
  const { orderId } = RoutesHelper.usePathParams(router);
  return (
    <PageWrapper>
      <Card>
        <CelebrationIcon>🎉</CelebrationIcon>
        <LargeText>Your query has been sent!</LargeText>
        <SubText>
          <SubTextParagraph>
            Order Number: <b>{orderId}</b>
          </SubTextParagraph>
          <SubTextParagraph>
            You should now receive an email containing details of your order and
            the next steps.
          </SubTextParagraph>
        </SubText>
        <Button
          variant="contained"
          onClick={() => {
            return router.push(RoutesHelper.routes.home());
          }}
        >
          View order status
        </Button>
      </Card>
    </PageWrapper>
  );
}
