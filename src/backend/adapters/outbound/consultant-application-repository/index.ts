import ConsultantApplicationModel from "@models/consultant-application";

export type CreateConsultantApplicationInputParams = {
  email: string;
  name: string;
  background: string;
  occupation: string;
  rate: string;
};

interface ConsultantApplicationRepositoryAdapter {
  create(
    input: CreateConsultantApplicationInputParams
  ): Promise<ConsultantApplicationModel>;
}

export default ConsultantApplicationRepositoryAdapter;
