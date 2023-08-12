import express from "express";
import { logger } from "firebase-functions/v1";
import { getAll, getSingleOne } from "../../services/swAPI";

const startshipRouter = express.Router();

startshipRouter.get("/", async (req, res) => {
  try {
    const allStarships = await getAll("starships");
    return res.send(allStarships);
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
    const singleStarship = await getSingleOne("starships", id);
    return res.send(singleStarship);
  } catch (err) {
    logger.error(`Error bringing starship ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default startshipRouter;
