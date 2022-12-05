import { Auth0NextIntegration } from "@common/auth0";
import { HTTPError } from "@common/http";
import { NextApiRequest, NextApiResponse } from "next";

type LoginHandler = typeof Auth0NextIntegration.handleLogin;

const loginRoute =
  ({ loginHandler }: { loginHandler: LoginHandler }) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await loginHandler(req, res);
    } catch (error) {
      const E = HTTPError.from(error.status || 503);
      new E(error.message).result(req, res);
    }
  };

export default loginRoute;
