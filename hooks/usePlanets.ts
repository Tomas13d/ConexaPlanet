import { useEffect, useState } from "react";
import { getAll } from "../services/getDataServices";
import { Planet } from "../types/global";

function usePlanets() {
  const [planetsResponse, setPlanetsResponse] = useState({});
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanets, setSelectedPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState({
    planets: true,
    selectedPlanets: true,
  });

  const namesToFind = ["Tatooine", "Alderaan", "Yavin IV"]; // mocked to match with images

  const getAllPlanets = async () => {
    try {
      const planetsResp = await getAll("planets");
      setPlanetsResponse(planetsResp);
      setPlanets(planetsResp.results);
    } catch (err) {
      setPlanetsResponse({});
      setPlanets([]);
      console.log("Error bringing planets usePlanets hook", err); 
    }
    setIsLoading((loaders) => ({ ...loaders, planets: false }));
  };

  useEffect(() => {
    getAllPlanets();
  }, []);

  useEffect(() => {
    if (planets && planets.length > 0) {
      const foundCharacters = planets.filter((planet) => {
        const isNameToFind = namesToFind.includes(planet.name);
        if (isNameToFind) {
          planet.image = `/static/img/${planet.name.toLowerCase().split(" ").join("_")}.jpg`;
        }
        return isNameToFind;
      });
      setSelectedPlanets(foundCharacters);
      setIsLoading((loaders) => ({ ...loaders, selectedPlanets: false }));
    }
  }, [planets]);

  return {
    planetsResponse,
    planets,
    selectedPlanets,
    isLoading,
  };
}

export default usePlanets;
