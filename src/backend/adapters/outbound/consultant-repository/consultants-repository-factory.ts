import client from "@services/prisma";

import InMemoryConsultantRepository from "./in-memory";
import PrismaConsultantRepository from "./prisma";

class ConsultantRepositoryFactory {
  static InMemory(): InMemoryConsultantRepository {
    return new InMemoryConsultantRepository();
  }

  static Prisma(): PrismaConsultantRepository {
    return new PrismaConsultantRepository({ client });
  }
}

export default ConsultantRepositoryFactory;
