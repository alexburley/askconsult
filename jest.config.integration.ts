import type { Config } from "jest";

import JestRootConfig from "./jest.config";

const JestIntegrationConfig: Config = {
  ...JestRootConfig,
  displayName: "INTEGRATION",
  testRegex: ".integration.test.ts",
  testPathIgnorePatterns: [],
};

export default JestIntegrationConfig;
