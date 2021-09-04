import express from "express";
import { getUsersController } from "../controller/getUsersController";

const userRouter = express.Router();

userRouter.get("/", (req, res) => getUsersController.execute(req, res));

export { userRouter };
