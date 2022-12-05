import { Static, Type } from "@sinclair/typebox";

import BaseModel from "../base-model/base-model";

const schema = Type.Object({
  email: Type.String(),
  id: Type.String(),
  fullName: Type.String(),
});

export type UserModelAttributes = Static<typeof schema>;
export type UserResult = UserModelAttributes;

export class UserModel
  extends BaseModel<UserModelAttributes, UserResult>
  implements UserModelAttributes
{
  fullName: string;
  email: string;
  id: string;

  constructor(attributes: UserModelAttributes) {
    super(attributes, schema);
    this.fullName = attributes.fullName;
    this.email = attributes.email;
    this.id = attributes.id;
  }

  result() {
    return {
      fullName: this.fullName,
      email: this.email,
      id: this.id,
    };
  }
}

export default UserModel;
