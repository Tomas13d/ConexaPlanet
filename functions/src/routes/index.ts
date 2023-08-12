import express from "express";
import { logger } from "firebase-functions/v1";
import { getAll, getSingleOne } from "../services/swAPI";

const mainRouter = express.Router();
const validEndpoints = ["starships", "people", "films", "planets"]; // in this proyect we use

interface CustomError {
  status?: number;
  message?: string;
}

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

function handleError(res: express.Response, endpoint: string, error: any, id?: string) {
  const endpointText = endpoint.endsWith("s") ? endpoint.slice(0, -1) : endpoint;
  if (typeof error === "object" && error !== null) {
    const customError = error as CustomError;
    if (customError.status === 404) {
      res.status(404).json({ message: `${endpointText} not found` });
    } else {
      logger.error(`Error bringing ${endpointText} ${id || "all"}: ${error}`);
      res.status(500).json({ message: customError.message || "An error occurred" });
    }
  } else {
    logger.error(`Unexpected error bringing ${endpointText} ${id || "all"}: ${error}`);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
}

export default mainRouter;

