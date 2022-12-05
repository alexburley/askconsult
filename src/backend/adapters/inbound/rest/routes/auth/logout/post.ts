import { Auth0NextIntegration } from "@common/auth0";
import { HTTPError } from "@common/http";
import { NextApiRequest, NextApiResponse } from "next";

type LogoutHandler = typeof Auth0NextIntegration.handleLogout;

const logoutRoute =
  ({ logoutHandler }: { logoutHandler: LogoutHandler }) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await logoutHandler(req, res);
    } catch (error) {
      const E = HTTPError.from(error.status || 503);
      new E(error.message).result(req, res);
    }
  };

export default logoutRoute;
