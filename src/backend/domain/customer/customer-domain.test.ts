import ConsultantApplicationRepositoryFactory from "@adapters/outbound/consultant-application-repository/consultant-application-repository-factory";
import {
  ConsultantApplicationRepositoryMock,
  ConsultantApplicationRepositoryMockType,
} from "@adapters/outbound/consultant-application-repository/test/consultant-application-repository-mock";
import userModelDummy from "@adapters/outbound/user-repository/test/user-item-dummy";
import {
  UserRepositoryMock,
  UserRepositoryMockType,
} from "@adapters/outbound/user-repository/test/user-repository-mock";
import UserRepositoryFactory from "@adapters/outbound/user-repository/user-repository-factory";
import ConsultantApplicationDummy from "@models/consultant-application/test/consultant-application-dummy";

import CustomerDomain from "./customer-domain";
import CustomerDomainFactory from "./customer-domain-factory";

describe("Customer", () => {
  let userRepository: UserRepositoryMockType;
  let consultantApplicationRepository: ConsultantApplicationRepositoryMockType;
  let domain: CustomerDomain;

  beforeEach(() => {
    userRepository = UserRepositoryMock();
    consultantApplicationRepository = ConsultantApplicationRepositoryMock();
    jest.spyOn(UserRepositoryFactory, "Auth0").mockReturnValue(userRepository);
    jest
      .spyOn(ConsultantApplicationRepositoryFactory, "Prisma")
      .mockReturnValue(consultantApplicationRepository);

    domain = CustomerDomainFactory.instance({ traceId: "someTraceId" });
  });

  describe("updateUserProfile", () => {
    beforeEach(() => {
      userRepository.update.mockResolvedValue(userModelDummy);
    });

    it("Should call the user repository with the id and data", async () => {
      await domain.updateUserProfile({
        userId: "someUserId",
        name: "someName",
      });
      expect(userRepository.update).toHaveBeenCalledWith({
        userId: "someUserId",
        data: { fullName: "someName" },
      });
    });

    it("Should return the updated user", async () => {
      const user = await domain.updateUserProfile({
        userId: "someUderId",
        name: "someName",
      });
      expect(user.result()).toEqual({
        id: "someUserId",
        fullName: "someName",
        email: "someEmail",
      });
    });
  });

  describe("applyForConsultant", () => {
    beforeEach(() => {
      consultantApplicationRepository.create.mockResolvedValue(
        new ConsultantApplicationDummy()
      );
    });

    it("Should return the application", async () => {
      const application = await domain.applyForConsultant({
        occupation: "someOccupation",
        name: "someName",
        background: "someBackground",
        email: "someEmail",
        expectedRate: "someRate",
      });
      expect(application).toEqual(new ConsultantApplicationDummy());
    });
  });

  describe("getUserProfile", () => {
    beforeEach(() => {
      userRepository.get.mockResolvedValue(userModelDummy);
    });

    it("Should call the user repository with the id", async () => {
      await domain.getUserProfile("someUserId");
      expect(userRepository.get).toHaveBeenCalledWith("someUserId");
    });

    it("Should return the user", async () => {
      const user = await domain.getUserProfile("someUserId");
      expect(user.result()).toEqual({
        id: "someUserId",
        fullName: "someName",
        email: "someEmail",
      });
    });
  });
});

export {};
