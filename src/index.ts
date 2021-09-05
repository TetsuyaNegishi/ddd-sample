import express from "express";
import { hello } from "./hello";
import { PrismaClient } from "@prisma/client";
import { userRouter } from "./user/http";

const prisma = new PrismaClient();

const app: express.Express = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();
router.get("/api/test", (req: express.Request, res: express.Response) => {
  res.send(hello("world"));
});
router.get("/api/todos", async (_: express.Request, res: express.Response) => {
  const todos = await prisma.todo.findMany();

  // const user = await prisma.user.create({ data: { email: "aaa" } });
  res.send({ todos });
});

router.use("/api/users", userRouter);

app.use(router);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
