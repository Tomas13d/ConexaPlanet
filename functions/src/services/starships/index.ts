import axios from "axios";
import sw from "../../utils/swConfig";
import { logger } from "firebase-functions/v1";

export const getAllStarships = async () => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/starships`);
    return response.data;
  } catch (err) {
    logger.error(`Error getAllStarships service > ${err}`);
    throw Error(`Error getAllStarships service > ${err}`);
  }
};


export const getSingleStarships = async (id: string) => {
    try {
      const response = await axios.get(`${sw.BASE_URL}/starships/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Error getSingleStarships service > ${err}`);
      throw Error(`Error getSingleStarships service > ${err}`);
    }
  };
  
