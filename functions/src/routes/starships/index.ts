import express from "express";
import { logger } from "firebase-functions/v1";
import { getAllStarships, getSingleStarships } from "../../services/starships";

const startshipRouter = express.Router();

startshipRouter.get("/", async (req, res) => {
  try {
    const allPeople = await getAllStarships();
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing all starships: ${err}`);
    return res.status(500).send({ message: err });
  }
});

startshipRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        error: "invalid-params",
        message: "starship id is required",
      });
    }
    const allPeople = await getSingleStarships(id);
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing starship ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default startshipRouter;
