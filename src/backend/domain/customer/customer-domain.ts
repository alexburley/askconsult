import ConsultantApplicationRepositoryAdapter from "@adapters/outbound/repositories/consultant-application-repository";
import UserRepositoryAdapter from "@adapters/outbound/repositories/user-repository";
import ConsultantApplicationModel from "@models/consultant-application";
import { UserModel } from "@models/user/user";

export interface CustomerDependencies {
  userRepository: UserRepositoryAdapter;
  consultantApplicationRepository: ConsultantApplicationRepositoryAdapter;
}

export type UpdateUserProfileParams = {
  userId: string;
  name?: string;
};

class CustomerDomain {
  private readonly userRepository: UserRepositoryAdapter;
  private readonly consultantApplicationRepository: ConsultantApplicationRepositoryAdapter;

  constructor(deps: CustomerDependencies) {
    this.userRepository = deps.userRepository;
    this.consultantApplicationRepository = deps.consultantApplicationRepository;
  }

  async updateUserProfile(input: UpdateUserProfileParams): Promise<UserModel> {
    const result = await this.userRepository.update({
      userId: input.userId,
      data: {
        fullName: input.name,
      },
    });
    return result;
  }

  async getUserProfile(userId: string): Promise<UserModel> {
    const result = await this.userRepository.get(userId);
    return result;
  }

  async applyForConsultant(application: {
    email: string;
    name: string;
    occupation: string;
    background: string;
    expectedRate: string;
  }): Promise<ConsultantApplicationModel> {
    return this.consultantApplicationRepository.create({
      email: application.email,
      name: application.name,
      occupation: application.occupation,
      background: application.background,
      rate: application.expectedRate,
    });
  }
}

export default CustomerDomain;
