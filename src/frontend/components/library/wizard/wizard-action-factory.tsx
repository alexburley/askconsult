/* eslint-disable @typescript-eslint/no-unused-vars */
import RoutesHelper from "@helpers/routes";

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
        href: RoutesHelper.routes.home(),
        label: "Query",
      },
    };
  }

  static query(id: string): WizardAction {
    return {
      name: "Query",
      state: {},
      previous: {
        href: RoutesHelper.routes.home(),
        label: "Show",
      },
      next: {
        href: RoutesHelper.routes.home(),
        label: "Confirm",
      },
    };
  }

  static show(id: string): WizardAction {
    return {
      name: "Show",
      state: {},
      previous: {
        href: RoutesHelper.routes.home(),
        label: "Search",
      },
      next: {
        href: RoutesHelper.routes.home(),
        label: "Query",
      },
    };
  }
}

export default WizardActionFactory;
