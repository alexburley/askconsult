import { Type } from "@sinclair/typebox";

import { BaseConfiguration } from "../../common/configuration";

const schema = Type.Object({
  NODE_ENV: Type.String(),
  NEXT_PUBLIC_VERCEL_URL: Type.String(),
});

const configuration = BaseConfiguration.instance(schema, ".env.integration");
export type IntegrationTestConfiguration = typeof configuration;
export default configuration;
