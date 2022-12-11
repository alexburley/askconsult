import { RepositoryItemNotFoundError } from "@common/errors";
import ConsultantModel from "@models/consultant/consultant";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import ConsultantRepositoryAdapter, {
  CreateConsultantInputParams,
  GetConsultantItemParams,
} from "..";
import { IN_MEMORY_CONSULTANTS } from "../in-memory";

type PostgresConsultantRepositoryDependencies = {
  client: PrismaClient;
};

class PostgresConsultantRepository implements ConsultantRepositoryAdapter {
  client: PrismaClient;

  constructor(dependencies: PostgresConsultantRepositoryDependencies) {
    this.client = dependencies.client;
  }

  async create({
    name,
    description,
    occupation,
  }: CreateConsultantInputParams): Promise<ConsultantModel> {
    const id = `CLNT:${randomUUID().replaceAll("-", "")}`;
    const user = await this.client.consultant.create({
      data: {
        id,
        name,
        description,
        occupation,
      },
    });
    return new ConsultantModel(user);
  }

  async list(): Promise<ConsultantModel[]> {
    return IN_MEMORY_CONSULTANTS;
  }

  async get({ id }: GetConsultantItemParams): Promise<ConsultantModel> {
    const user = await this.client.consultant.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new RepositoryItemNotFoundError(id, this.constructor.name);
    return new ConsultantModel({
      id: user.id.toString(),
      name: "someName",
      occupation: "someOccupation",
      description: "someDescription",
    });
  }
}
export default PostgresConsultantRepository;
