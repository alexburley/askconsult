import callbackRoute from "@adapters/inbound/rest/routes/auth/callback/get";
import loginRoute from "@adapters/inbound/rest/routes/auth/login/post";
import logoutRoute from "@adapters/inbound/rest/routes/auth/logout/post";
import getAuth0ProfileRoute from "@adapters/inbound/rest/routes/auth/profile/get";
import { Auth0NextIntegration } from "@common/auth0";

export default Auth0NextIntegration.handleAuth({
  login: loginRoute({ loginHandler: Auth0NextIntegration.handleLogin }),
  logout: logoutRoute({ logoutHandler: Auth0NextIntegration.handleLogout }),
  callback: callbackRoute({
    callbackHandler: Auth0NextIntegration.handleCallback,
  }),
  profile: getAuth0ProfileRoute({
    getProfileHandler: Auth0NextIntegration.handleProfile,
  }),
});
