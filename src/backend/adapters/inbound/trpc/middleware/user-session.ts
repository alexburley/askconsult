import { Auth0NextIntegration } from "@common/auth0";
import UserModel from "@models/user";

import { middleware } from "../util";

const UserSessionMiddleware = middleware(async ({ ctx, next }) => {
  const { user } = Auth0NextIntegration.getSession(ctx.req, ctx.res) || {
    user: null,
  };
  const newCtx = {
    ...ctx,
    user: user
      ? new UserModel({
          id: user.sub,
          email: user.email,
          fullName: user["ask_consult/user_metadata"].name || user.name,
        })
      : null,
  };
  return next({
    ctx: newCtx,
  });
});

export default UserSessionMiddleware;
