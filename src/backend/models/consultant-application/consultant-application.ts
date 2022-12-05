import { Static, Type } from "@sinclair/typebox";

import BaseModel from "../base-model/base-model";

const schema = Type.Object({
  id: Type.String(),
  email: Type.String(),
  rate: Type.String(),
  occupation: Type.String(),
  name: Type.String(),
  background: Type.String(),
});

export type ConsultantApplicationModelAttributes = Static<typeof schema>;
export type ConsultantApplicationResult = ConsultantApplicationModelAttributes;

export class ConsultantApplicationModel
  extends BaseModel<
    ConsultantApplicationModelAttributes,
    ConsultantApplicationResult
  >
  implements ConsultantApplicationModelAttributes
{
  id: string;
  email: string;
  occupation: string;
  name: string;
  rate: string;
  background: string;

  constructor(attributes: ConsultantApplicationModelAttributes) {
    super(attributes, schema);
    this.id = attributes.id;
    this.name = attributes.name;
    this.occupation = attributes.occupation;
    this.rate = attributes.rate;
    this.background = attributes.background;
    this.email = attributes.email;
  }

  result() {
    return {
      id: this.id,
      name: this.name,
      occupation: this.occupation,
      background: this.background,
      email: this.email,
      rate: this.rate,
    };
  }
}

export default ConsultantApplicationModel;
