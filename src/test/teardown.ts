import { TestContainersFixture } from "./fixtures";

const teardown = async function (
  _globalConfig_: unknown,
  _projectConfig_: unknown
) {
  await TestContainersFixture.down();
};

export default teardown;
