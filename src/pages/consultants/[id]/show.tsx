import PageWrapper from "@components/contextual/page-wrapper";
import Wizard from "@components/library/wizard";
import WizardActionFactory from "@components/library/wizard/wizard-action-factory";
import RoutingHelper from "frontend/helpers/routing";

export default function ShowConsultantPage() {
  const router = RoutingHelper.useRouter();
  const { consultantId } = RoutingHelper.usePathParams(router);
  return (
    <PageWrapper>
      <Wizard
        consultantId={consultantId}
        action={WizardActionFactory.show(consultantId)}
      ></Wizard>
    </PageWrapper>
  );
}
