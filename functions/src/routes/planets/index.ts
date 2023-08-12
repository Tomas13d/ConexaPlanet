import express from "express";
import { logger } from "firebase-functions/v1";
import { getAll, getSingleOne } from "../../services/swAPI";

const planetRouter = express.Router();

planetRouter.get("/", async (req, res) => {
  try {
    const allPlanets = await getAll("planets");
    return res.send(allPlanets);
  } catch (err) {
    logger.error(`Error bringing all planets: ${err}`);
    return res.status(500).send({ message: err });
  }
});

planetRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        error: "invalid-params",
        message: "planet id is required",
      });
    }
    const singlePlanet = await getSingleOne("planets", id);
    return res.send(singlePlanet);
  } catch (err) {
    logger.error(`Error bringing planet ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default planetRouter;
