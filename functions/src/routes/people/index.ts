import express from "express";
import { logger } from "firebase-functions/v1";
import { getAllPeople, getSinglePerson } from "../../services/people";

const peopleRouter = express.Router();

peopleRouter.get("/all", async (req, res) => {
  try {
    const allPeople = await getAllPeople();
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing all people: ${err}`);
    return res.status(500).send({ message: err });
  }
});

peopleRouter.get("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        error: "invalid-params",
        message: "person id is required",
      });
    }
    const allPeople = await getSinglePerson(id);
    return res.send(allPeople);
  } catch (err) {
    logger.error(`Error bringing all people: ${err}`);
    return res.status(500).json({ message: err });
  }
});

export default peopleRouter;
