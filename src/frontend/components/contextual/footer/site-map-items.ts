import RoutesHelper from "@helpers/routes";

type LinkOptions = {
  external?: boolean;
};

type ListItem = [string, string, LinkOptions?];
type SiteMapItem = [string, ListItem[]];

const SITE_MAP_ITEMS: SiteMapItem[] = [
  [
    "AskConsult",
    [
      ["Home", RoutesHelper.routes.home()],
      ["About Us", RoutesHelper.routes.aboutUs()],
      ["Contact Us", RoutesHelper.routes.contactUs()],
      ["Terms of Service", RoutesHelper.routes.terms()],
      ["Privacy", RoutesHelper.routes.privacy()],
    ],
  ],
  [
    "Clients",
    [
      ["Consultant Index", RoutesHelper.routes.consultantsIndex()],
      ["How it works", RoutesHelper.routes.clientHowItWorks()],
      ["Support", RoutesHelper.routes.clientSupport()],
      ["FAQ", RoutesHelper.routes.clientFAQ()],
    ],
  ],
  [
    "Consultants",
    [
      ["Apply", RoutesHelper.routes.applyToBeAConsultant()],
      ["How it works", RoutesHelper.routes.consultantHowItWorks()],
      ["FAQ", RoutesHelper.routes.consultantFAQ()],
    ],
  ],
  [
    "Social",
    [
      ["Facebook", RoutesHelper.routes.home()],
      ["Instagram", RoutesHelper.routes.home()],
      ["Twitter", RoutesHelper.routes.home()],
    ],
  ],
];

export default SITE_MAP_ITEMS;
