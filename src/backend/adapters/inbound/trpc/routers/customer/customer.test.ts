import userModelDummy from "@adapters/outbound/repositories/user-repository/test/user-item-dummy";
import UserModel from "@models/user";

import { useCustomerDomainMock } from "../../../../../domain/customer/test/hooks";
import { useSilencedLogger } from "../../../../outbound/logger/test/hooks";
import useUserSessionMiddlewareMock from "../../middleware/test/user-session-mock";
import { useTRPCClient } from "../../test/hooks";

const trpc = useTRPCClient();
const customerDomain = useCustomerDomainMock();
useSilencedLogger();
useUserSessionMiddlewareMock({
  id: "someUserId",
  name: "someName",
  email: "someEmail",
});

test("getUserProfile should get the user profile with a 200 response", async () => {
  customerDomain.mock.getUserProfile.mockResolvedValue(userModelDummy);

  const data = await trpc.client.customers.getMyProfile();

  expect(customerDomain.mock.getUserProfile).toBeCalledWith("someUserId");
  expect(data).toEqual({ result: userModelDummy.result() });
});

test("updateUserProfile should get the user profile with a 200 response", async () => {
  const updatedProfile = new UserModel({
    id: userModelDummy.id,
    email: userModelDummy.email,
    fullName: "someOtherName",
  });
  customerDomain.mock.updateUserProfile.mockResolvedValue(updatedProfile);

  const data = await trpc.client.customers.updateMyProfile({
    profile: { name: "someOtherName" },
  });

  expect(customerDomain.mock.updateUserProfile).toBeCalledWith({
    name: "someOtherName",
    userId: "someUserId",
  });
  expect(data).toEqual({ result: updatedProfile.result() });
});

test("updateUserProfile should throw a 400 for bad information", async () => {
  expect.assertions(1);

  await trpc.client.customers
    .updateMyProfile({
      profile: {
        badProperty: "someProperty",
      },
    } as never)

    .catch((err) => {
      expect(err.code).toEqual("BAD_REQUEST");
    });
});
