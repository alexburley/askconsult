import PageWrapper from "@components/contextual/page-wrapper";
import Wizard from "@components/library/wizard";
import WizardActionFactory from "@components/library/wizard/wizard-action-factory";
import RoutesHelper from "@helpers/routes";

export default function ConfirmQueryPage() {
  const router = RoutesHelper.useRouter();
  const { consultantId } = RoutesHelper.usePathParams(router);
  return (
    <PageWrapper>
      <Wizard
        consultantId={consultantId}
        action={WizardActionFactory.confirm(consultantId)}
      ></Wizard>
    </PageWrapper>
  );
}
