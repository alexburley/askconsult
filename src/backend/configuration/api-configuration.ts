import { Type } from "@sinclair/typebox";

import { BaseConfiguration } from "../../common/configuration";

const schema = Type.Object({
  NODE_ENV: Type.String(),
  LOG_LEVEL: Type.String({ default: "info" }),
  AUTH0_MGMT_API_TOKEN: Type.String(),
  AUTH0_MGMT_API_DOMAIN: Type.String(),
  AUTH0_SECRET: Type.String(),
  AUTH0_ISSUER_BASE_URL: Type.String(),
  AUTH0_CLIENT_ID: Type.String(),
  AUTH0_CLIENT_SECRET: Type.String(),
});

const configuration = BaseConfiguration.instance(schema, ".env");
export type APIConfiguration = typeof configuration;
export default configuration;
