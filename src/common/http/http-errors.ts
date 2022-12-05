import { NextApiRequest, NextApiResponse } from "next";

export class HTTPError extends Error {
  status: number;
  description: string;
  error?: unknown;
  message: string;

  constructor(message: string, error?: unknown) {
    super(message);
    this.error = error;
    this.name = this.constructor.name;
  }

  static from(status: number): new (...args: unknown[]) => HTTPError {
    if (status === 400) {
      return HTTPBadRequestError;
    }
    if (status === 401) {
      return HTTPUnauthorizedError;
    }
    if (status === 404) {
      return HTTPNotFoundError;
    }
    if (status === 500) {
      return HTTPInternalServerError;
    }
    if (status === 503) {
      return HTTPServiceUnavailable;
    }
    throw new Error("Could not create HTTP error for code: " + status);
  }

  json() {
    return {
      status: this.status,
      message: this.description,
      error: this.error || this.message,
    };
  }

  result(req: NextApiRequest, res: NextApiResponse): void {
    return res.status(this.status).json(this.json());
  }
}

export class HTTPUnauthorizedError extends HTTPError {
  status = 401;
  description = "Unauthorized";
}

export class HTTPNotFoundError extends HTTPError {
  status = 404;
  description = "Unauthorized";
}

export class HTTPBadRequestError extends HTTPError {
  status = 400;
  description = "Bad Request";

  json() {
    return {
      status: this.status,
      message: this.description,
      error: this.error || this.message,
    };
  }

  result(req: NextApiRequest, res: NextApiResponse): void {
    return res.status(this.status).json(this.json());
  }
}

export class HTTPInternalServerError extends HTTPError {
  status = 500;
  description = "Internal Server Error";
}

export class HTTPServiceUnavailable extends HTTPError {
  status = 503;
  description = "Service Unavailable";
}
