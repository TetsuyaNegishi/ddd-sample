import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { Users } from "../domain/Users";

export interface IUserRepository {
  getAll(): Promise<Users>;
  getAllQueryDto(): Promise<UsersQueryDto>;
}
