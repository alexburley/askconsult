import ConsultantApplicationModel from "@models/consultant-application";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import ConsultantApplicationRepositoryAdapter, {
  CreateConsultantApplicationInputParams,
} from "..";

type PostgresConsultantApplicationRepositoryDependencies = {
  client: PrismaClient;
};

class PrismaConsultantApplictionRepository
  implements ConsultantApplicationRepositoryAdapter
{
  private client: PrismaClient;

  constructor(
    dependencies: PostgresConsultantApplicationRepositoryDependencies
  ) {
    this.client = dependencies.client;
  }

  async create({
    name,
    background,
    occupation,
    email,
    rate,
  }: CreateConsultantApplicationInputParams): Promise<ConsultantApplicationModel> {
    const id = `CLNT-APP:${randomUUID().replaceAll("-", "")}`;
    const application = await this.client.consultantApplication.create({
      data: {
        id,
        name,
        email,
        occupation,
        background,
        rate,
      },
    });
    return new ConsultantApplicationModel(application);
  }
}
export default PrismaConsultantApplictionRepository;
