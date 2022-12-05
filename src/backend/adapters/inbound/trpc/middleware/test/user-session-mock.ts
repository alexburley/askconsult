import { Auth0NextIntegration } from "@common/auth0";

export const useUserSessionMiddlewareMock = (
  userInfo: {
    id: string;
    name: string;
    email: string;
  } | null
) => {
  const getSessionStub = jest.fn();
  beforeEach(() => {
    if (userInfo) {
      getSessionStub.mockReturnValue({
        user: {
          sub: userInfo.id,
          email: userInfo.email,
          "ask_consult/user_metadata": {
            name: userInfo.name,
          },
        },
      });
    }
    jest
      .spyOn(Auth0NextIntegration, "getSession")
      .mockImplementation(getSessionStub);
  });
};

export default useUserSessionMiddlewareMock;
