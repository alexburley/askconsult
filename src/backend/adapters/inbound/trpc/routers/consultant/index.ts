import AskDomainFactory from "@domain/ask/ask-domain-factory";
import CustomerDomainFactory from "@domain/customer/customer-domain-factory";
import { Type } from "@sinclair/typebox";

import { Compile, router } from "../../util";
import { procedure } from "../../util/procedures";

export const listConsultants = procedure.query(async ({ ctx }) => {
  const ask = AskDomainFactory.instance({
    traceId: ctx.traceId,
  });
  const consultants = await ask.listConsultants();
  return { result: consultants.map((c) => c.result()) };
});

export const getConsultantByID = procedure
  .input(
    Compile(
      Type.Object(
        {
          id: Type.String(),
        },
        { additionalProperties: false }
      )
    )
  )
  .query(async ({ ctx, input }) => {
    const ask = AskDomainFactory.instance({
      traceId: ctx.traceId,
    });
    const consultant = await ask.getConsultant(input.id);
    return { result: consultant.result() };
  });

export const sendConsultantApplication = procedure
  .input(
    Compile(
      Type.Object({
        application: Type.Object(
          {
            occupation: Type.String(),
            background: Type.String(),
            expectedRate: Type.String(),
            name: Type.String(),
            email: Type.String(),
          },
          { additionalProperties: false }
        ),
      })
    )
  )
  .mutation(async ({ ctx, input }) => {
    const customer = CustomerDomainFactory.instance({ traceId: ctx.traceId });
    await customer.applyForConsultant(input.application);
    return {
      success: true,
    };
  });

export const ConsultantsRouter = router({
  listConsultants,
  sendConsultantApplication,
  getConsultantByID,
});
