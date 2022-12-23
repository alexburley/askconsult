import { always } from "@common/fp";
import { useRouter } from "next/router";

const routes = {
  // STATIC
  home: always("/" as const),
  aboutUs: always("/about-us" as const),
  contactUs: always("/contact-us" as const),
  privacy: always("/privacy" as const),
  terms: always("/terms" as const),

  // USER
  authenticate: always("/api/auth/login" as const),
  logout: always("/logout" as const),
  profile: always("/user/me" as const),

  // CONSULTANTS
  consultantsIndex: always("/consultants" as const),
  applyToBeAConsultant: always("/consultants/apply" as const),
  bookConsultant: (id: string) => `/consultants/${id}/book` as const,
  consultantFAQ: always("/consultants/faq" as const),
  consultantHowItWorks: always("/consultants/how-it-works" as const),

  // CLIENT
  clientHowItWorks: always("/how-it-works" as const),
  clientFAQ: always("/faq" as const),
  clientSupport: always("/support" as const),
  payForBooking: (id: string) => `/consultants/${id}/pay` as const,
} as const;

/**
 *
 * Data Access idea:
 * RoutesHelper.routes.XYZ
 */
export default class RoutesHelper {
  static routes = routes;
  static useRouter = useRouter;
  static usePathParams = (router) => {
    const { id } = router.query;
    return {
      consultantId: id as string,
      orderId: id as string,
    };
  };
}
