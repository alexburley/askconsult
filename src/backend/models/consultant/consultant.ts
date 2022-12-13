import { Static, Type } from "@sinclair/typebox";

import BaseModel from "../base-model/base-model";

const schema = Type.Object({
  id: Type.String(),
  occupation: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
  avatarURL: Type.Optional(Type.String()),
});

export type ConsultantModelAttributes = Static<typeof schema>;
export type ConsultantResult = ConsultantModelAttributes;

export class ConsultantModel
  extends BaseModel<ConsultantModelAttributes, ConsultantResult>
  implements ConsultantModelAttributes
{
  occupation: string;
  name: string;
  description?: string;
  id: string;
  avatarURL: string;

  constructor(attributes: ConsultantModelAttributes) {
    super(attributes, schema);
    this.id = attributes.id;
    this.name = attributes.name;
    this.occupation = attributes.occupation;
    this.description = attributes.description;
    // TODO: Make a proper default Image URL
    this.avatarURL = attributes.avatarURL || "/images/headshot-example";
  }

  result(): ConsultantResult {
    return {
      id: this.id,
      name: this.name,
      occupation: this.occupation,
      description: this.description,
      avatarURL: this.avatarURL,
    };
  }
}

export default ConsultantModel;
