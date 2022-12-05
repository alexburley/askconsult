import ConsultantModel from "@models/consultant/consultant";
import assert from "assert";

import ConsultantRepositoryFactory from "../consultants-repository-factory";
import PostgresConsultantRepository from "./prisma-consultant-repository";

describe("PrismaConsultantRepository", () => {
  let repository: PostgresConsultantRepository;

  beforeEach(() => {
    repository = ConsultantRepositoryFactory.Prisma();
  });

  describe("create", () => {
    it("Should create a consultant", async () => {
      const consultant = await repository.create({
        name: "someName",
        occupation: "someOccupation",
        description: "someDescription",
      });
      const expected = new ConsultantModel({
        id: "someId",
        name: "someName",
        occupation: "someOccupation",
        description: "someDescription",
      });
      expected.id = expect.stringMatching("^CLNT:");
      expect(consultant).toEqual(expected);
    });
  });

  describe("list", () => {
    beforeEach(async () => {
      await repository.create({
        name: "someName",
        occupation: "someOccupation",
        description: "someDescription",
      });
    });
    it("Should return the consultants", async () => {
      const consultants = await repository.list();
      expect(consultants.length).toBeGreaterThan(0);
      consultants.forEach((c) => {
        expect(c).toMatchObject({
          name: expect.any(String),
          occupation: expect.any(String),
          description: expect.any(String),
        });
      });
    });
  });

  describe("get", () => {
    let user: ConsultantModel;

    beforeEach(async () => {
      user = await repository.create({
        name: "someName",
        occupation: "someOccupation",
        description: "someDescription",
      });
    });

    it("Should return the consultant given the ID", async () => {
      const result = await repository.get({
        id: user.id,
      });
      expect(result).toEqual(user);
    });

    it("Should throw a repository item not found error if ID doesn't exist", async () => {
      try {
        await repository.get({
          id: "20",
        });
        assert.fail(0, 1, "Exception not thrown");
      } catch (err) {
        expect(err.message).toEqual(
          "Could not find item with ID: 20 in PostgresConsultantRepository"
        );
        expect(err.code).toEqual("RepositoryItemNotFound");
      }
    });
  });
});
