import { Auth0NextIntegration } from "@common/auth0";
import { HTTPError } from "@common/http";
import { NextApiRequest, NextApiResponse } from "next";

type CallbackHandler = typeof Auth0NextIntegration.handleCallback;

const callbackRoute =
  ({ callbackHandler }: { callbackHandler: CallbackHandler }) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await callbackHandler(req, res);
    } catch (error) {
      const E = HTTPError.from(error.status || 503);
      new E(error.message).result(req, res);
    }
  };

export default callbackRoute;
