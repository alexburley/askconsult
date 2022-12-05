import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const JestRootConfig: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src",
  }),
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  maxWorkers: "50%",
  testPathIgnorePatterns: [".test.ts"],
  testTimeout: 10000,
};

export default JestRootConfig;
