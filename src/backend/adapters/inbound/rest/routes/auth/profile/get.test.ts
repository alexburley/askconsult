/* eslint-disable @typescript-eslint/no-explicit-any */

import silenceLogger from "@adapters/outbound/logger/test/silence-logger";
import { NextApiHandler } from "next";
import { createRequest, createResponse, MockRequest } from "node-mocks-http";

import getAuth0ProfileRoute from "./get";

describe("GET ~/auth/profile", () => {
  let req: MockRequest<any>;
  let res: MockRequest<any>;
  let handler: NextApiHandler;
  let authHandler;

  beforeEach(() => {
    silenceLogger();
    req = createRequest({
      method: "GET",
      url: "/auth/profile",
    });
    res = createResponse();
    authHandler = jest.fn();
    handler = getAuth0ProfileRoute({ getProfileHandler: authHandler });
  });

  const act = () => handler(req as any, res as any);

  it("Should call the given auth handler", async () => {
    await act();
    expect(authHandler).toHaveBeenCalledWith(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});

export {};
