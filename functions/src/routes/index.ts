import express from "express";

import { getAll, getSingleOne } from "../services/swAPI";
import handleError from "./handleError";

const mainRouter = express.Router();
const validEndpoints = ["starships", "people", "films", "planets"]; // in this proyect we use

mainRouter.get("/:swEndpoint", async (req, res) => {
  const { swEndpoint } = req.params;

  if (!validEndpoints.includes(swEndpoint)) {
    return res.status(400).json({
      error: "invalid-endpoint",
      message: "Invalid Star Wars endpoint",
    });
  }

  try {
    const allData = await getAll(swEndpoint);
    res.json(allData);
  } catch (error) {
    return handleError(res, swEndpoint, error);
  }
});

mainRouter.get("/:swEndpoint/:id", async (req, res) => {
  const { swEndpoint, id } = req.params;

  if (!validEndpoints.includes(swEndpoint)) {
    return res.status(400).json({
      error: "invalid-endpoint",
      message: "Invalid Star Wars endpoint",
    });
  }

  if (!id) {
    return res.status(400).json({
      error: "invalid-params",
      message: `${swEndpoint} id is required`,
    });
  }

  try {
    const data = await getSingleOne(swEndpoint, id);
    res.json(data);
  } catch (error) {
    return handleError(res, swEndpoint, error, id);
  }
});

export default mainRouter;
