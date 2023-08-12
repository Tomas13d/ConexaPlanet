import axios from "axios";
import sw from "../../utils/swConfig";
import { logger } from "firebase-functions/v1";

export const getAll = async (endpoint: string) => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/${endpoint}`);
    return response.data;
  } catch (err) {
    logger.error(`Error getAll service of ${endpoint} > ${err}`);
    throw Error(`Error getAll service of ${endpoint} > ${err}`);
  }
};

export const getSingleOne = async (endpoint: string, id: string) => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (err) {
      logger.error(`Error getSingleOne service of ${endpoint} > ${err}`);
      throw Error(`Error getSingleOne service of ${endpoint} > ${err}`);
  }
};
