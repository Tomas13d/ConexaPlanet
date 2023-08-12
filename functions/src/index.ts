import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import mainRouter from "./routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.use("/", mainRouter);



export const swAPI = functions.https.onRequest(app);
