import { Static, Type } from "@sinclair/typebox";

import BaseModel from "../base-model/base-model";

const schema = Type.Object({
  id: Type.String(),
  occupation: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
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

  constructor(attributes: ConsultantModelAttributes) {
    super(attributes, schema);
    this.id = attributes.id;
    this.name = attributes.name;
    this.occupation = attributes.occupation;
    this.description = attributes.description;
  }

  result() {
    return {
      id: this.id,
      name: this.name,
      occupation: this.occupation,
      description: this.description,
    };
  }
}

export default ConsultantModel;
