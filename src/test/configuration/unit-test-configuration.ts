import { Type } from "@sinclair/typebox";
import path from "path";

import { BaseConfiguration } from "../../common/configuration";

const schema = Type.Object({
  NODE_ENV: Type.String(),

  AUTH0_MGMT_API_TOKEN: Type.String(),
  AUTH0_MGMT_API_DOMAIN: Type.String(),

  DOCKER_COMPOSE_FILE_NAME: Type.String({
    default: "docker-compose.test.yml",
  }),
  DOCKER_COMPOSE_FILE_PATH: Type.String({
    default: path.join(__dirname, "../../../docker"),
  }),

  POSTGRES_DB_URL: Type.String(),
  POSTGRES_CONTAINER_NAME: Type.String(),
});

const configuration = BaseConfiguration.instance(schema, ".env.test");
export type UnitTestConfiguration = typeof configuration;
export default configuration;
