import { Auth0NextIntegration } from "@common/auth0";

class AuthHelper {
  static useUser = Auth0NextIntegration.useUser;
  static UserProvider = Auth0NextIntegration.UserProvider;
  static withPageAuthRequired = Auth0NextIntegration.withPageAuthRequired;
}

export default AuthHelper;
