import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { Users } from "../domain/Users";
import { IUserRepository } from "./IUserRepository";

type UserRow = { id: number; email: string };
type UsersRow = UserRow[];

type UserModel = {
  findMany(): Promise<{ id: number; email: string }[]>;
};

export class UserRepository implements IUserRepository {
  constructor(private readonly model: UserModel) {}
  async getAll(): Promise<Users> {
    const usersRow = await this.model.findMany();
    const users = this.transformUsersRowToDomain(usersRow);
    return users;
  }

  private transformUsersRowToDomain(usersRow: UsersRow): Users {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const userArray = usersRow.map(this.transformUserRowToDomain);
    return Users.create(userArray);
  }

  private transformUserRowToDomain({ id, email }: UserRow): User {
    const userId = UserId.create(id);
    const userEmail = UserEmail.create(email);
    return User.create(userId, userEmail);
  }
}
