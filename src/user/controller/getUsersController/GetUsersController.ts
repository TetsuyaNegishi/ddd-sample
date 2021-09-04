import * as express from "express";
import { IUserService } from "../../service/IUserService";

export class GetUsersController {
  constructor(private readonly service: IUserService) {}

  async execute(req: express.Request, res: express.Response): Promise<void> {
    const users = await this.service.getAll();
    const usersDto = users.toDto();
    res.json(usersDto);
    return;
  }
}
