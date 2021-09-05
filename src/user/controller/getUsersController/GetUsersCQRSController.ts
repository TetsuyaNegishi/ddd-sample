import * as express from "express";
import { IUserService } from "../../service/IUserService";

export class GetUsersCQRSController {
  constructor(private readonly service: IUserService) {}

  async execute(req: express.Request, res: express.Response): Promise<void> {
    const users = await this.service.getAllCQRS();
    res.json(users);
    return;
  }
}
