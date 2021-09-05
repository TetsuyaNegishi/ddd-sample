import express from "express";
import {
  getUsersController,
  getUsersCQRSController,
} from "../controller/getUsersController";

const userRouter = express.Router();

userRouter.get("/", (req, res) => getUsersController.execute(req, res));

userRouter.get("/cqrs", (req, res) => getUsersCQRSController.execute(req, res));

export { userRouter };
