import TRPCRouter from "@adapters/inbound/trpc";
import { createContext } from "@adapters/inbound/trpc/util/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: TRPCRouter,
  createContext,
});
