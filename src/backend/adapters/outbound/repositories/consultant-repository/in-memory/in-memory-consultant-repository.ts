import ConsultantModel from "@models/consultant/consultant";

import ConsultantRepositoryAdapter, {
  CreateConsultantInputParams,
  GetConsultantItemParams,
} from "..";
import { IN_MEMORY_CONSULTANTS } from "./in-memory-consultants";

export { IN_MEMORY_CONSULTANTS };
class InMemoryConsultantRepository implements ConsultantRepositoryAdapter {
  async create(input_: CreateConsultantInputParams): Promise<ConsultantModel> {
    throw new Error("Not Implemented");
  }

  async list(): Promise<ConsultantModel[]> {
    return IN_MEMORY_CONSULTANTS;
  }

  async get({ id }: GetConsultantItemParams): Promise<ConsultantModel> {
    return IN_MEMORY_CONSULTANTS.find((c) => c.id === id);
  }
}
export default InMemoryConsultantRepository;
