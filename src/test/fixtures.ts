import { UnitTestConfiguration } from "@test/configuration/unit-test-configuration";
import { exec } from "child_process";
import {
  DockerComposeEnvironment,
  StartedDockerComposeEnvironment,
} from "testcontainers";
import { StartedGenericContainer } from "testcontainers/dist/generic-container/started-generic-container";
import util from "util";

const run = util.promisify(exec);
export class TestContainersTestFixture {
  environment: StartedDockerComposeEnvironment;
  pg: StartedGenericContainer;

  async init(configuration: UnitTestConfiguration) {
    if (!this.environment) {
      this.environment = await new DockerComposeEnvironment(
        configuration.DOCKER_COMPOSE_FILE_PATH,
        configuration.DOCKER_COMPOSE_FILE_NAME
      ).up();

      this.pg = this.environment.getContainer(
        configuration.POSTGRES_CONTAINER_NAME
      );
    }
  }

  async down() {
    if (this.environment) {
      await this.environment.down({ timeout: 3000 });
    }
  }
}

export const TestContainersFixture = new TestContainersTestFixture();

export class PostgresTestFixture {
  containers: TestContainersTestFixture;
  initialized: boolean = false;
  setup: Promise<void>;

  constructor() {
    this.containers = TestContainersFixture;
  }

  async init(configuration: UnitTestConfiguration) {
    if (!this.initialized) {
      this.initialized = true;
      await this.containers.init(configuration);
      await run("npx prisma migrate dev --name postgres-init");
    }
  }
}

export const PostgresFixture = new PostgresTestFixture();
