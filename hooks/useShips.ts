import { useEffect, useState } from "react";
import { getAll } from "../services/getDataServices";
import { Starship } from "../types/global";

function useShips() {
  const [startshipsResponse, setStarshipsResponse] = useState({});
  const [starships, setStarships] = useState<Starship[]>([]);
  const [selectedStarships, setSelectedStarships] = useState<Starship[]>([]);
  const [isLoading, setIsLoading] = useState({
    starships: true,
    selectedStarships: true,
  });

  const namesToFind = ["CR90 corvette", "Star Destroyer", "Death Star"]; // mocked to match with images

  const getAllStarships = async () => {
    try {
      const starshipsResp = await getAll("starships");
      setStarshipsResponse(starshipsResp);
      setStarships(starshipsResp.results);
    } catch (err) {
      setStarshipsResponse({});
      setStarships([]);
      console.log("Error bringing starships useShips hook", err);
    }
    setIsLoading((loaders) => ({ ...loaders, starships: false }));
  };

  useEffect(() => {
    getAllStarships();
  }, []);

  useEffect(() => {
    if (starships && starships.length > 0) {
      const foundCharacters = starships.filter((ship) => {
        const isNameToFind = namesToFind.includes(ship.name);
        if (isNameToFind) {
          ship.image = `/static/img/${ship.name.toLowerCase().split(" ").join("_")}.png`;
        }
        return isNameToFind;
      });
      setSelectedStarships(foundCharacters);
      setIsLoading((loaders) => ({ ...loaders, selectedStarships: false }));
    }
  }, [starships]);

  return {
    startshipsResponse,
    starships,
    selectedStarships,
    isLoading,
  };
}

export default useShips;
