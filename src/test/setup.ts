import configuration from "./configuration/unit-test-configuration";
import { PostgresFixture } from "./fixtures";

const setup = async function (
  _globalConfig_: unknown,
  _projectConfig_: unknown
) {
  await PostgresFixture.init(configuration);
};

export default setup;
