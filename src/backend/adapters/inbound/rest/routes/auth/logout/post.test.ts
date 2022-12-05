/* eslint-disable @typescript-eslint/no-explicit-any */

import silenceLogger from "@adapters/outbound/logger/test/silence-logger";
import { NextApiHandler } from "next";
import { createRequest, createResponse, MockRequest } from "node-mocks-http";

import logoutRoute from "./post";

describe("POST ~/auth/logout", () => {
  let req: MockRequest<any>;
  let res: MockRequest<any>;
  let handler: NextApiHandler;
  let authHandler;

  beforeEach(() => {
    silenceLogger();
    req = createRequest({
      method: "POST",
      url: "/auth/logout",
    });
    res = createResponse();
    authHandler = jest.fn();
    handler = logoutRoute({ logoutHandler: authHandler });
  });

  const act = () => handler(req as any, res as any);

  it("Should call the given auth handler", async () => {
    await act();
    expect(authHandler).toHaveBeenCalledWith(req, res);
    expect(res._getStatusCode()).toEqual(200);
  });
});

export {};
