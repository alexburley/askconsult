import { Static, Type } from "@sinclair/typebox";

import BaseModel from "../base-model/base-model";

const schema = Type.Object({
  id: Type.String(),
  consultantId: Type.String(),
  email: Type.String(),
  query: Type.String(),
});

export type OrderModelAttributes = Static<typeof schema>;
export type OrderResult = OrderModelAttributes;
export class OrderModel
  extends BaseModel<OrderModelAttributes, OrderResult>
  implements OrderModelAttributes
{
  id: string;
  consultantId: string;
  email: string;
  query: string;

  constructor(attributes: OrderModelAttributes) {
    super(attributes, schema);
    this.id = attributes.id;
    this.consultantId = attributes.consultantId;
    this.email = attributes.email;
    this.query = attributes.query;
  }

  result() {
    return {
      id: this.id,
      consultantId: this.consultantId,
      email: this.email,
      query: this.query,
    };
  }
}

export default OrderModel;
