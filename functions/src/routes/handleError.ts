import { logger } from "firebase-functions/v1";
import express from "express";

interface CustomError {
    status?: number;
    message?: string;
  }
  
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

  export default handleError