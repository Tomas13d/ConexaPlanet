import express from "express";
import peopleRouter from "./people";
import filmsRouter from "./films";
import startshipRouter from "./starships";
import planetRouter from "./planets";

const mainRouter = express.Router();

mainRouter.use("/people", peopleRouter);
mainRouter.use("/films", filmsRouter);
mainRouter.use("/starships", startshipRouter);
mainRouter.use("/planets", planetRouter);

export default mainRouter;
