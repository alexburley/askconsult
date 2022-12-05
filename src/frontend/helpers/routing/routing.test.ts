import path from "path";

import RoutingHelper from "./routing";

describe("RoutingService", () => {
  const PAGES_PATH = "@pages/";
  describe("Routes", () => {
    [
      [
        "home",
        () => RoutingHelper.routes.home(),
        "/",
        path.join(PAGES_PATH, "index.tsx"),
      ],
      [
        "order-confirmation",
        () => RoutingHelper.routes.orderConfirmed("123"),
        "/orders/123/confirmed",
        path.join(PAGES_PATH, "orders/[id]/confirmed.tsx"),
      ],
      [
        "order-status",
        () => RoutingHelper.routes.orderStatus("123"),
        "/orders/123/status",
        path.join(PAGES_PATH, "orders/[id]/status.tsx"),
      ],
      [
        "show-consultant",
        () => RoutingHelper.routes.showConsultant("123"),
        "/consultants/123/show",
        path.join(PAGES_PATH, "consultants/[id]/show.tsx"),
      ],
      [
        "confirm-consultant-query",
        () => RoutingHelper.routes.confirmConsultantQuery("123"),
        "/consultants/123/confirm",
        path.join(PAGES_PATH, "consultants/[id]/confirm.tsx"),
      ],
      [
        "query-consultant",
        () => RoutingHelper.routes.queryConsultant("123"),
        "/consultants/123/query",
        path.join(PAGES_PATH, "consultants/[id]/query.tsx"),
      ],
    ].forEach(
      ([spec, act, routerPath]: [string, () => string, string, string]) => {
        describe(spec, () => {
          it(`Generates the path: ${routerPath}`, () => {
            const route = act();
            expect(route).toBe(routerPath);
          });
        });
      }
    );
  });
});
