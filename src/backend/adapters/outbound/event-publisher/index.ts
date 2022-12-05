import { DomainEvent } from "@domain/events";

export type LogEventParams = Record<string, unknown>;

export interface EventPublisherAdapter {
  log(event: DomainEvent, input: LogEventParams): void;
}
