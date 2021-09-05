import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { Users } from "../domain/Users";

export interface IUserService {
  getAll(): Promise<Users>;
  getAllCQRS(): Promise<UsersQueryDto>;
}
