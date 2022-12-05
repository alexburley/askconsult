import ConsultantModel from "@models/consultant/consultant";

export type GetConsultantItemParams = { id: string };
export type ListConsultantItemsParams = Record<string, unknown>;
export type CreateConsultantInputParams = {
  name: string;
  description: string;
  occupation: string;
};

interface ConsultantRepositoryAdapter {
  create(input: CreateConsultantInputParams): Promise<ConsultantModel>;
  get(input: GetConsultantItemParams): Promise<ConsultantModel>;
  list(input?: ListConsultantItemsParams): Promise<ConsultantModel[]>;
}

export default ConsultantRepositoryAdapter;
