import configuration from "@backend-config/api-configuration";
import { UserModel } from "@models/user/user";
import { ManagementClient } from "auth0";

import UserRepositoryAdapter, { UpdateUserParams } from "..";

type Auth0ManagementClient = ManagementClient;

export type Auth0UserItem = {
  email: string;
  emailVerified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updatedAt: string;
  orgId: string;
  roles: string[];
};

class Auth0UserRepository implements UserRepositoryAdapter {
  client: Auth0ManagementClient;
  constructor(auth0Client: Auth0ManagementClient) {
    this.client = auth0Client;
  }

  async update(params: UpdateUserParams) {
    await this._updateAccessToken();
    const res = await this.client.updateUser(
      { id: params.userId },
      {
        user_metadata: {
          ...(params.data.fullName ? { name: params.data.fullName } : {}),
        },
      }
    );

    return new UserModel({
      id: res.user_id,
      fullName: res.user_metadata.name || res.name,
      email: res.email,
    });
  }

  async get(id: string) {
    await this._updateAccessToken();
    const res = await this.client
      .getUser({
        id,
      })
      .catch((err) => {
        throw err;
      });
    return new UserModel({
      id: res.user_id,
      fullName: res.user_metadata.name || res.name,
      email: res.email,
    });
  }

  async _updateAccessToken() {
    const token = await this.client.getAccessToken();
    this.client = new ManagementClient({
      token,
      domain: configuration.AUTH0_MGMT_API_DOMAIN,
      scope: "update:users",
      clientId: configuration.AUTH0_CLIENT_ID,
      clientSecret: configuration.AUTH0_CLIENT_SECRET,
    });
  }
}

export default Auth0UserRepository;
