// TODO: Rethink services
import RoutingHelper from "frontend/helpers/routing";

type LinkOptions = {
  external?: boolean;
};

type ListItem = [string, string, LinkOptions?];
type SiteMapItem = [string, ListItem[]];

const SITE_MAP_ITEMS: SiteMapItem[] = [
  [
    "AskConsult",
    [
      ["Home", RoutingHelper.routes.home()],
      ["About Us", RoutingHelper.routes.home()],
      ["Contact Us", RoutingHelper.routes.home()],
      ["Terms of Service", RoutingHelper.routes.home()],
      ["Privacy", RoutingHelper.routes.home()],
    ],
  ],
  [
    "Clients",
    [
      ["Consultant Index", RoutingHelper.routes.home()],
      ["How it works", RoutingHelper.routes.home()],
      ["Support", RoutingHelper.routes.home()],
      ["FAQ", RoutingHelper.routes.home()],
    ],
  ],
  [
    "Consultants",
    [
      ["Apply", RoutingHelper.routes.home()],
      ["How it works", RoutingHelper.routes.home()],
      ["FAQ", RoutingHelper.routes.home()],
    ],
  ],
  [
    "Social",
    [
      ["Facebook", RoutingHelper.routes.home()],
      ["Instagram", RoutingHelper.routes.home()],
      ["Twitter", RoutingHelper.routes.home()],
    ],
  ],
];

export default SITE_MAP_ITEMS;
