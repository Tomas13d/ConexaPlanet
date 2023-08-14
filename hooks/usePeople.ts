import { useEffect, useState } from "react";
import { getAll } from "../services/getDataServices";
import { Character } from "../types/global";

function usePeople() {
  const [peopleResponse, setPeopleResponse] = useState({});
  const [people, setPeople] = useState<Character[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState({
    people: true,
    selectedPeople: true,
  });

  const namesToFind = ["Luke Skywalker", "Darth Vader", "Leia Organa"]; // mocked to match with images

  const getAllPeople = async () => {
    try {
      const peopleResp = await getAll("people");
      setPeopleResponse(peopleResp);
      setPeople(peopleResp.results);
    } catch (err) {
      setPeopleResponse({});
      setPeople([]);
      console.log("Error bringing people usePeople hook", err);
    }
    setIsLoading((loaders) => ({ ...loaders, people: false }));
  };

  useEffect(() => {
    getAllPeople();
  }, []);

  useEffect(() => {
    if (people && people.length > 0) {
      const foundCharacters = people.filter((char) => {
        const isNameToFind = namesToFind.includes(char.name);
        if (isNameToFind) {
          char.image = `/static/img/${char.name.toLowerCase().split(" ").join("_")}.jpg`;
        }
        return isNameToFind;
      });
      setSelectedPeople(foundCharacters);
      setIsLoading((loaders) => ({ ...loaders, selectedPeople: false }));
    }
  }, [people]);

  return {
    peopleResponse,
    people,
    selectedPeople,
    isLoading,
  };
}

export default usePeople;
