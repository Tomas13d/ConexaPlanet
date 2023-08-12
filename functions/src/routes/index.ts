import express from "express";
import peopleRouter from "./people";

const mainRouter = express.Router();

mainRouter.use("/people", peopleRouter);

export default mainRouter;
