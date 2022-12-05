import APIConfiguration from "@backend-config/api-configuration";
import { ManagementClient } from "auth0";

import UserRepositoryAdapter from ".";
import Auth0UserRepository from "./auth0";

class UserRepositoryFactory {
  static Auth0(): UserRepositoryAdapter {
    return new Auth0UserRepository(
      new ManagementClient({
        clientId: APIConfiguration.AUTH0_CLIENT_ID,
        clientSecret: APIConfiguration.AUTH0_CLIENT_SECRET,
        domain: APIConfiguration.AUTH0_MGMT_API_DOMAIN,
        scope: "update:users",
      })
    );
  }
}

export default UserRepositoryFactory;
