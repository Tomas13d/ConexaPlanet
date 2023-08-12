import axios, { AxiosError, AxiosResponse } from "axios";
import { logger } from "firebase-functions/v1";

const api = axios.create({
  baseURL: "https://swapi.dev/api"
});

interface ApiResponse {
  data: any;
}

interface ErrorResult {
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

export async function getAll(endpoint: string): Promise<any> {
  const response = await fetchData(`/${endpoint}`);
  return "data" in response ? response.data : response;
}

export async function getSingleOne(endpoint: string, id: string): Promise<any> {
  const response = await fetchData(`/${endpoint}/${id}`);
  return "data" in response ? response.data : response;
}
