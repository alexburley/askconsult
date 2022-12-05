import { Auth0NextIntegration } from "@common/auth0";
import { HTTPError } from "@common/http";
import { NextApiRequest, NextApiResponse } from "next";

type GetProfileHandler = typeof Auth0NextIntegration.handleProfile;

const getAuth0ProfileRoute =
  ({ getProfileHandler }: { getProfileHandler: GetProfileHandler }) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await getProfileHandler(req, res);
    } catch (error) {
      const E = HTTPError.from(error.status || 503);
      new E(error.message).result(req, res);
    }
  };

export default getAuth0ProfileRoute;
