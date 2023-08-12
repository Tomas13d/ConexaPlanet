import axios from "axios";
import sw from "../../utils/swConfig";
import { logger } from "firebase-functions/v1";

export const getAllPlanets= async () => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/planets`);
    return response.data;
  } catch (err) {
    logger.error(`Error getAllPlanets service > ${err}`);
    throw Error(`Error getAllPlanets service > ${err}`);
  }
};

export const getSinglePlanet = async (id: string) => {
    try {
      const response = await axios.get(`${sw.BASE_URL}/planets/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Error getSinglePlanet service > ${err}`);
      throw Error(`Error getSinglePlanet service > ${err}`);
    }
  };
  
