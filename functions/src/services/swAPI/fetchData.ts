import { logger } from "firebase-functions/v1";
import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

export interface ApiResponse {
  data: any;
}

export interface ErrorResult {
  error: string;
  message: string;
}

async function fetchData(endpoint: string): Promise<ApiResponse | ErrorResult> {
  try {
    const response: AxiosResponse = await api.get(endpoint);
    return { data: response.data };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 404) {
        logger.error(`Data not found at ${endpoint}`);
        return { error: "not-found", message: "Data not found" };
      }
      logger.error(
        `Error fetching data from ${endpoint}: ${axiosError.message}`
      );
      return {
        error: "request-failed",
        message: "An error occurred while fetching data",
      };
    } else {
      logger.error(`Unexpected error fetching data from ${endpoint}: ${error}`);
      return {
        error: "request-failed",
        message: "An unexpected error occurred",
      };
    }
  }
}

export default fetchData;
