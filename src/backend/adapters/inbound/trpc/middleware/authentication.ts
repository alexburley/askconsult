import { Auth0NextIntegration } from "@common/auth0";
import { TRPCError } from "@trpc/server";

import { middleware } from "../util";

const AuthenticationMiddleware = middleware(async ({ ctx, next }) => {
  const { user } = Auth0NextIntegration.getSession(ctx.req, ctx.res);
  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "User has no valid session",
      cause: new Error(),
    });
  }
  return next({
    ctx,
  });
});

export default AuthenticationMiddleware;
