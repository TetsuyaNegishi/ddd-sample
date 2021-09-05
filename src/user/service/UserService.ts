import { CreateUserDto } from "../controller/createUserController/CreateUserDto";
import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { NewUserId } from "../domain/UserId";
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

  async createUser(dto: CreateUserDto): Promise<User> {
    const email = UserEmail.create(dto.email);
    const newUserId = NewUserId.create();

    const user = User.create(newUserId, email);

    const result = await this.repository.save(user);
    return result;
  }
}
