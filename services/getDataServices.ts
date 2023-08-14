import axios from "axios";

const swApi = axios.create({
  baseURL: "https://us-central1-lemur-digital.cloudfunctions.net/swAPI",
});

export const getAll = async (endpoint: string) => {
  try {
    const allResponses = await swApi.get(`/${endpoint}`);
    return allResponses.data;
  } catch (err) {
    console.log(`Error bringin all ${endpoint}`, err);
    throw Error(`Error bringin all ${endpoint}: ${err}`);
  }
};

export const getSingleOne = async (endpoint: string, id: string) => {
  try {
    const allResponses = await swApi.get(`/${endpoint}/${id}`);
    return allResponses.data;
  } catch (err) {
    console.log(`Error bringin single one ${endpoint}`, err);
    throw Error(`Error bringin single one ${endpoint}: ${err}`);
  }
};
