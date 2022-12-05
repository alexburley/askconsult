import ConsultantApplicationRepositoryFactory from "@adapters/outbound/consultant-application-repository/consultant-application-repository-factory";
import UserRepositoryFactory from "@adapters/outbound/user-repository/user-repository-factory";

import CustomerDomain from "./customer-domain";

class CustomerDomainFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static instance({ traceId }: { traceId: string }): CustomerDomain {
    return new CustomerDomain({
      userRepository: UserRepositoryFactory.Auth0(),
      consultantApplicationRepository:
        ConsultantApplicationRepositoryFactory.Prisma(),
    });
  }
}

export default CustomerDomainFactory;
