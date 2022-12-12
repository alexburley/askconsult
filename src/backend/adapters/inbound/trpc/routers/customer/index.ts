import CustomerDomainFactory from "@domain/customer/customer-domain-factory";
import { Type } from "@sinclair/typebox";

import AuthenticationMiddleware from "../../middleware/authentication";
import { Compile, router } from "../../util";
import { procedure } from "../../util/procedures";

const getMyProfile = procedure
  .use(AuthenticationMiddleware)
  .query(async ({ ctx }) => {
    const customer = CustomerDomainFactory.instance({
      traceId: ctx.traceId,
    });
    const profile = await customer.getUserProfile(ctx.user.id);
    return { result: profile.result() };
  });

const updateMyProfile = procedure
  .use(AuthenticationMiddleware)
  .input(
    Compile(
      Type.Object({
        profile: Type.Object(
          {
            name: Type.String(),
          },
          { additionalProperties: false }
        ),
      })
    )
  )
  .mutation(async ({ ctx, input }) => {
    const customer = CustomerDomainFactory.instance({ traceId: ctx.traceId });
    const profile = await customer.updateUserProfile({
      userId: ctx.user.id,
      name: input.profile.name,
    });
    return {
      result: profile.result(),
    };
  });

export const CustomerRouter = router({
  getMyProfile,
  updateMyProfile,
});
