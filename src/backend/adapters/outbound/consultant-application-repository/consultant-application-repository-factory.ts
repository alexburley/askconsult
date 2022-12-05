import client from "@services/prisma";

import ConsultantApplicationRepositoryAdapter from ".";
import PrismaConsultantApplictionRepository from "./prisma";

class ConsultantApplicationRepositoryFactory {
  static Prisma(): ConsultantApplicationRepositoryAdapter {
    return new PrismaConsultantApplictionRepository({
      client,
    });
  }
}

export default ConsultantApplicationRepositoryFactory;
