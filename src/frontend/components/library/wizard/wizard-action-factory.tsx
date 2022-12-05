import RoutingHelper from "frontend/helpers/routing";

type Pointer = {
  href: string;
  label: string;
};
export type WizardAction = {
  name: "Show" | "Query" | "Confirm";
  state: Record<string, unknown>;
  next?: Pointer;
  previous?: Pointer;
};

class WizardActionFactory {
  static confirm(id: string): WizardAction {
    return {
      name: "Confirm",
      state: {},
      previous: {
        href: RoutingHelper.routes.queryConsultant(id),
        label: "Query",
      },
    };
  }

  static query(id: string): WizardAction {
    return {
      name: "Query",
      state: {},
      previous: {
        href: RoutingHelper.routes.showConsultant(id),
        label: "Show",
      },
      next: {
        href: RoutingHelper.routes.confirmConsultantQuery(id),
        label: "Confirm",
      },
    };
  }

  static show(id: string): WizardAction {
    return {
      name: "Show",
      state: {},
      previous: {
        href: RoutingHelper.routes.home(),
        label: "Search",
      },
      next: {
        href: RoutingHelper.routes.queryConsultant(id),
        label: "Query",
      },
    };
  }
}

export default WizardActionFactory;
