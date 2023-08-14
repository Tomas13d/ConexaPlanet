import { useEffect, useState } from "react";
import { getAll } from "../services/getDataServices";
import { Film } from "../types/global";

function useFilms() {
  const [filmsResponse, setFilmsResponse] = useState({});
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilms, setSelectedFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState({
    films: true,
    selectedFilms: true,
  });

  const namesToFind = ["A New Hope", "Revenge of the Sith"]; // mocked to match with images

  const getAllFilms = async () => {
    try {
      const filmsResp = await getAll("films");
      setFilmsResponse(filmsResp);
      setFilms(filmsResp.results);
    } catch (err) {
      setFilmsResponse({});
      setFilms([]);
      console.log("Error bringing Films useFilms hook", err);
    }
    setIsLoading((loaders) => ({ ...loaders, films: false }));
  };

  useEffect(() => {
    getAllFilms();
  }, []);

  useEffect(() => {
    if (films && films.length > 0) {
      const foundCharacters = films.filter((film) => {
        const isNameToFind = namesToFind.includes(film.title);
        if (isNameToFind) {
          film.image = `/static/img/${film.title.toLowerCase().split(" ").join("_")}.jpg`;
        }
        return isNameToFind;
      });
      setSelectedFilms(foundCharacters);
      setIsLoading((loaders) => ({ ...loaders, selectedFilms: false }));
    }
  }, [films]);

  return {
    filmsResponse,
    films,
    selectedFilms,
    isLoading,
  };
}

export default useFilms;
