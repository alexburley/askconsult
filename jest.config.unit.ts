import type { Config } from "jest";
import { join } from "path";

import JestRootConfig from "./jest.config";

const JestUnitConfig: Config = {
  ...JestRootConfig,
  restoreMocks: true,
  coverageDirectory: join(__dirname, "coverage"),
  globalSetup: join(__dirname, "./src/test/setup.ts"),
  globalTeardown: join(__dirname, "./src/test/teardown.ts"),
  testPathIgnorePatterns: [".integration.test.ts"],
  slowTestThreshold: 20000,
};

export default JestUnitConfig;
