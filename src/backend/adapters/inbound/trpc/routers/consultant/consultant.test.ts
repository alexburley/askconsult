import { useSilencedLogger } from "@adapters/outbound/logger/test/hooks";
import { useConsultantsDomainMock } from "@domain/ask/test/hooks";
import { useCustomerDomainMock } from "@domain/customer/test/hooks";
import ConsultantDummy from "@models/consultant/test/consultant-dummy";

import useUserSessionMiddlewareMock from "../../middleware/test/user-session-mock";
import { useTRPCClient } from "../../test/hooks";

useSilencedLogger();
useUserSessionMiddlewareMock(null);
const trpc = useTRPCClient();
const customerDomain = useCustomerDomainMock();
const consultantsDomain = useConsultantsDomainMock();

test("listConsultants should list consultants", async () => {
  consultantsDomain.mock.listConsultants.mockResolvedValue([
    new ConsultantDummy(),
  ]);
  const result = await trpc.client.consultants.listConsultants();
  expect(result).toEqual({ result: [new ConsultantDummy().result()] });
});

test("getConsultantByID should get the consultant", async () => {
  consultantsDomain.mock.getConsultant.mockResolvedValue(new ConsultantDummy());

  const result = await trpc.client.consultants.getConsultantByID({
    id: "someId",
  });

  expect(consultantsDomain.mock.getConsultant).toBeCalledWith("someId");
  expect(result).toEqual({ result: new ConsultantDummy().result() });
});

test("sendConsultantApplication should get the user profile", async () => {
  customerDomain.mock.applyForConsultant.mockResolvedValue(
    Promise.resolve() as never
  );

  const result = await trpc.client.consultants.sendConsultantApplication({
    application: {
      name: "someName",
      email: "someEmail",
      occupation: "someOccupation",
      background: "someBackground",
      expectedRate: "someRate",
    },
  });

  expect(result).toEqual({
    success: true,
  });
});

it("sendConsultantApplication should return a 400 for bad data", async () => {
  expect.assertions(1);

  await trpc.client.consultants
    .sendConsultantApplication({
      application: {
        badProperty: "someProperty",
      },
    } as never)

    .catch((err) => {
      expect(err.code).toEqual("BAD_REQUEST");
    });
});
