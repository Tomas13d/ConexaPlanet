import express from "express";
import peopleRouter from "./people";
import filmsRouter from "./films";

const mainRouter = express.Router();

mainRouter.use("/people", peopleRouter);
mainRouter.use("/films", filmsRouter);

export default mainRouter;
