import { useRouter } from "next/router";

export class Routes {
  showConsultant(id: string): string {
    return `/consultants/${id}/show`;
  }

  queryConsultant(id: string): string {
    return `/consultants/${id}/query`;
  }

  confirmConsultantQuery(id: string): string {
    return `/consultants/${id}/confirm`;
  }

  orderConfirmed(id: string): string {
    return `/orders/${id}/confirmed`;
  }

  orderStatus(id: string): string {
    return `/orders/${id}/status`;
  }

  home(): string {
    return `/`;
  }

  profile(): string {
    return "/user/me";
  }

  authenticate(): string {
    return `/api/auth/login`;
  }

  logout(): string {
    return `/api/auth/logout`;
  }

  apply(): string {
    return "/consultants/apply";
  }
}

export default class RoutingHelper {
  static routes = new Routes();
  static useRouter = useRouter;
  static usePathParams = (router) => {
    const { id } = router.query;
    return {
      consultantId: id as string,
      orderId: id as string,
    };
  };
}
