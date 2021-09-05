import { CreateUserDto } from "../controller/createUserController/CreateUserDto";
import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { User } from "../domain/User";
import { Users } from "../domain/Users";

export interface IUserService {
  getAll(): Promise<Users>;
  getAllCQRS(): Promise<UsersQueryDto>;
  createUser(dto: CreateUserDto): Promise<User>;
}
