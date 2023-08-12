import express from "express";
import { logger } from "firebase-functions/v1";
import { getAll, getSingleOne } from "../../services/swAPI";

const peopleRouter = express.Router();

peopleRouter.get("/", async (req, res) => {
  try {
    const allPeople = await getAll("people");
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing all people: ${err}`);
    return res.status(500).send({ message: err });
  }
});

peopleRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        error: "invalid-params",
        message: "person id is required",
      });
    }
    const allPeople = await getSingleOne("people", id);
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing person ${id}: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default peopleRouter;
