import { ConsultantsRouter } from "./routers/consultant";
import { CustomerRouter } from "./routers/customer";
import { router } from "./util";

export const TRPCRouter = router({
  consultants: ConsultantsRouter,
  customers: CustomerRouter,
});

export type AppRouter = typeof TRPCRouter;
