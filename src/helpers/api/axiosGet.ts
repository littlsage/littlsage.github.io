import axios, { RawAxiosRequestConfig } from "axios";

const axiosGet = async <TResponse>(
  url: string,
  config?: RawAxiosRequestConfig,
): Promise<TResponse> => {
  const response = await axios.get<TResponse>(url, config);

  return response?.data;
};

export { axiosGet };
