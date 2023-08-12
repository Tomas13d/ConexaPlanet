import express from "express";
import { logger } from "firebase-functions/v1";
import { getAll, getSingleOne } from "../../services/swAPI";

const filmsRouter = express.Router();

filmsRouter.get("/", async (req, res) => {
  try {
    const allFilms = await getAll("films");
    return res.send(allFilms);
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
    const singleFilm = await getSingleOne("films", id)
    return res.send(singleFilm);
  } catch (err) {
    logger.error(`Error bringing film ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default filmsRouter;
