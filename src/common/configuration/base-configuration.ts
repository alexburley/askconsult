/* eslint-disable security/detect-object-injection */
import { Static, TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { forEach } from "lodash";

class BaseConfiguration {
  static instance<S extends TSchema>(schema: S, file: string): Static<S> {
    const values = Value.Cast(schema, process.env);
    forEach(Object.keys(values), (key) => {
      const isOptional = !!(
        schema.properties[key] && schema.properties[key].default
      );
      if (!isOptional && process.env[key] === undefined) {
        throw new Error(
          "Configuration Error - missing " + key + " from " + file
        );
      }
    });
    return values;
  }
}

export default BaseConfiguration;
