import UserModel from "@models/user/user";

const userModelDummy = new UserModel({
  id: "someUserId",
  fullName: "someName",
  email: "someEmail",
});

export default userModelDummy;
