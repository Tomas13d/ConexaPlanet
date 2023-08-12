import axios from "axios";
import sw from "../../utils/swConfig";
import { logger } from "firebase-functions/v1";

export const getAllFilms = async () => {
  try {
    const response = await axios.get(`${sw.BASE_URL}/films`);
    return response.data;
  } catch (err) {
    logger.error(`Error getAllFilms service > ${err}`);
    throw Error(`Error getAllFilms service > ${err}`);
  }
};


export const getSingleFilm = async (id: string) => {
    try {
      const response = await axios.get(`${sw.BASE_URL}/films/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Error getSingleFilm service > ${err}`);
      throw Error(`Error getSingleFilms service > ${err}`);
    }
  };
  
