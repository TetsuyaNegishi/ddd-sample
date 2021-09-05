import * as express from "express";
import { IUserService } from "../../service/IUserService";
import { CreateUserDto } from "./CreateUserDto";

export class CreateUsersController {
  constructor(private readonly service: IUserService) {}

  async execute(req: express.Request, res: express.Response): Promise<void> {
    const dto = req.body as CreateUserDto;
    const user = await this.service.createUser(dto);
    if (user instanceof Error) {
      res.status(400).json();
      return;
    }
    const userDto = user.toJson();
    res.json(userDto);
    return;
  }
}
