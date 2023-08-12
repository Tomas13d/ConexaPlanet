import axios from "axios";
import sw from "../../utils/swConfig";
import { logger } from "firebase-functions/v1";

export const getAllPeople = async () => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/people`);
    return response.data;
  } catch (err) {
    logger.error(`Error getAllPeople service > ${err}`);
    throw Error(`Error getAllPeople service > ${err}`);
  }
};


export const getSinglePerson = async (id: string) => {
    try {
      const response = await axios.get(`${sw.BASE_URL}/people/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Error getSinglePerson service > ${err}`);
      throw Error(`Error getSinglePerson service > ${err}`);
    }
  };
  
