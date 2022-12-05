import ConsultantApplicationModel from "@models/consultant-application";

import ConsultantApplicationRepositoryAdapter from "..";
import ConsultantApplicationRepositoryFactory from "../consultant-application-repository-factory";

describe("PrismaConsultantApplicationRepository", () => {
  let repository: ConsultantApplicationRepositoryAdapter;

  beforeEach(() => {
    repository = ConsultantApplicationRepositoryFactory.Prisma();
  });

  describe("create", () => {
    it("Should create a consultant application", async () => {
      const application = await repository.create({
        name: "someName",
        occupation: "someOccupation",
        email: "someEmail",
        background: "someBackground",
        rate: "someRate",
      });
      const expected = new ConsultantApplicationModel({
        name: "someName",
        id: "someId",
        occupation: "someOccupation",
        email: "someEmail",
        background: "someBackground",
        rate: "someRate",
      });
      expected.id = expect.stringMatching("^CLNT-APP:");
      expect(application).toEqual(expected);
    });
  });
});
