import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Value } from "@sinclair/typebox/value";
import { TRPCError } from "@trpc/server";

export function Compile<T extends TSchema>(
  schema: T,
  references: TSchema[] = []
) {
  const check = TypeCompiler.Compile(schema, references);

  return (input: unknown) => {
    const errors = [...Value.Errors(schema, input)];
    if (errors.length === 0 && check.Check(input)) return input;
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Invalid schema: " + JSON.stringify(errors[0]),
      // optional: pass the original error to retain stack trace
      cause: new Error(),
    });
  };
}
