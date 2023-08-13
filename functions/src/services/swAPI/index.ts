import fetchData from "./fetchData";

export async function getAll(endpoint: string): Promise<any> {
  const response = await fetchData(`/${endpoint}`);
  return "data" in response ? response.data : response;
}

export async function getSingleOne(endpoint: string, id: string): Promise<any> {
  const response = await fetchData(`/${endpoint}/${id}`);
  return "data" in response ? response.data : response;
}
