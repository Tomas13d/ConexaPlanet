import express from "express";
import { logger } from "firebase-functions/v1";
import { getAllFilms, getSingleFilm} from "../../services/films";

const filmsRouter = express.Router();

filmsRouter.get("/", async (req, res) => {
  try {
    const allPeople = await getAllFilms();
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing all films: ${err}`);
    return res.status(500).send({ message: err });
  }
});

filmsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        error: "invalid-params",
        message: "film id is required",
      });
    }
    const allPeople = await getSingleFilm(id);
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing film ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default filmsRouter;
