import Auth0UserRepository from "./auth0-user-repository";

describe("Auth0UserRepository", () => {
  let auth0ManagementClient;
  let repository: Auth0UserRepository;

  beforeEach(() => {
    auth0ManagementClient = {
      updateUser: jest.fn(),
      getUser: jest.fn(),
    };
    repository = new Auth0UserRepository(auth0ManagementClient);
    jest
      .spyOn(repository, "_updateAccessToken")
      .mockResolvedValue(auth0ManagementClient);
  });

  describe("Get", () => {
    beforeEach(() => {
      auth0ManagementClient.getUser.mockResolvedValue({
        user_id: "someUserId",
        user_metadata: {
          name: "someName",
        },
        email: "someEmail",
      });
    });

    it("Should return the user", async () => {
      const user = await repository.get("someUserId");
      expect(user.result()).toEqual({
        id: "someUserId",
        fullName: "someName",
        email: "someEmail",
      });
    });

    it("Should call the management client", async () => {
      await repository.get("someUserId");
      expect(auth0ManagementClient.getUser).toHaveBeenCalledWith({
        id: "someUserId",
      });
    });
  });

  describe("Update", () => {
    beforeEach(() => {
      auth0ManagementClient.updateUser.mockReturnValue({
        user_id: "someUserId",
        user_metadata: {
          name: "someName",
        },
        email: "someEmail",
      });
    });

    it("Should return the user", async () => {
      const res = await repository.update({
        userId: "someUserId",
        data: {
          fullName: "someName",
        },
      });
      expect(res.result()).toEqual({
        id: "someUserId",
        fullName: "someName",
        email: "someEmail",
      });
    });

    it("Should call the management client", async () => {
      await repository.update({
        userId: "someUserId",
        data: {
          fullName: "someName",
        },
      });
      expect(auth0ManagementClient.updateUser).toHaveBeenCalledWith(
        {
          id: "someUserId",
        },
        {
          user_metadata: {
            name: "someName",
          },
        }
      );
    });
  });
});
