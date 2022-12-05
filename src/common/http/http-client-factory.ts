import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export type HTTPClient = AxiosInstance;

class HTTPClientFactory {
  static instance(config: AxiosRequestConfig) {
    return axios.create(config);
  }
}

export default HTTPClientFactory;
