import TraceIDMiddleware from "../middleware/logging";
import UserSessionMiddleware from "../middleware/user-session";
import { trpcBaseProcedure } from "./trpc";

// Avoid import issues by having this in a seperate file
export const procedure = trpcBaseProcedure
  .use(TraceIDMiddleware)
  .use(UserSessionMiddleware);
