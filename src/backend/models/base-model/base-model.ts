import { TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

abstract class BaseModel<
  Attributes extends Record<string, unknown>,
  Result extends Record<string, unknown>
> {
  constructor(attributes: Attributes, schema: TSchema) {
    const errors = [...Value.Errors(schema, attributes)];
    if (errors.length) {
      throw new Error("Invalid schema: " + JSON.stringify(errors[0]));
    }
  }

  abstract result(): Result;
}

export default BaseModel;
