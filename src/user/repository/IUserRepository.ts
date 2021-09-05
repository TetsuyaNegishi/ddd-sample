import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { User } from "../domain/User";
import { Users } from "../domain/Users";

export interface IUserRepository {
  getAll(): Promise<Users>;
  getAllQueryDto(): Promise<UsersQueryDto>;
  save(user: User): Promise<User>;
}
