import { User } from "./User";
import { UsersDto } from "./UsersDto";

export class Users {
  private constructor(private users: User[]) {}

  static create(users: User[]): Users {
    return new Users(users);
  }

  toDto(): UsersDto {
    return this.users.map((user) => user.toJson());
  }
}
