import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { Users } from "../domain/Users";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
  constructor(private repository: IUserRepository) {}

  async getAll(): Promise<Users> {
    const users = this.repository.getAll();
    return users;
  }

  async getAllCQRS(): Promise<UsersQueryDto> {
    const users = this.repository.getAllQueryDto();
    return users;
  }
}
