import * as Auth0Next from "@auth0/nextjs-auth0";
class Auth0NextIntegration {
  static handleCallback = Auth0Next.handleCallback;
  static handleLogin = Auth0Next.handleLogin;
  static handleLogout = Auth0Next.handleLogout;
  static handleProfile = Auth0Next.handleProfile;
  static handleAuth = Auth0Next.handleAuth;
  static withApiAuthRequired = Auth0Next.withApiAuthRequired;
  static useUser = Auth0Next.useUser;
  static UserProvider = Auth0Next.UserProvider;
  static getSession = Auth0Next.getSession;
  static withPageAuthRequired = Auth0Next.withPageAuthRequired;
}

export default Auth0NextIntegration;
