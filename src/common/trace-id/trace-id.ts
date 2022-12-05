import { IncomingHttpHeaders } from "http";
import hyperid from "hyperid";

class TraceID {
  static generate = hyperid();
  static HEADER_NAME = "x-trace-id";

  static header() {
    return {
      [TraceID.HEADER_NAME]: TraceID.generate(),
    };
  }

  static parseHeader({ headers }: { headers: IncomingHttpHeaders }): string {
    return (headers[TraceID.HEADER_NAME] as string) || TraceID.generate();
  }
}

export default TraceID;
