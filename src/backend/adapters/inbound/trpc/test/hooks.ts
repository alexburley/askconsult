import { createRequest, createResponse } from "node-mocks-http";

import { TRPCRouter } from "../app";
import { createContext } from "../util/context";

export const useTRPCClient = (): {
  client: ReturnType<typeof TRPCRouter.createCaller>;
} => {
  const trpc = { client: null };

  beforeEach(async () => {
    const req = createRequest() as never;
    const res = createResponse() as never;
    const ctx = await createContext({ req, res } as never);
    trpc.client = TRPCRouter.createCaller(ctx);
  });

  return trpc;
};
