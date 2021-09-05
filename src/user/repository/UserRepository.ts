import { Prisma } from "@prisma/client";
import { UsersQueryDto } from "../domain/query/UsersQueryDto";
import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { Users } from "../domain/Users";
import { IUserRepository } from "./IUserRepository";

type UserRow = { id: number; email: string };
type UsersRow = UserRow[];

// type UserModel2 = {
//   findMany(): Promise<{ id: number; email: string }[]>;
//   create({ data: { email } }: { data: { email: string } }): Promise<void>;
// };

type UserModel = Prisma.UserDelegate<
  Prisma.PrismaClientOptions["rejectOnNotFound"]
>;

// type UserModel = Prisma.UserDelegate<false>;

export class UserRepository implements IUserRepository {
  constructor(private readonly model: UserModel) {}
  async getAll(): Promise<Users> {
    const usersRow = await this.model.findMany();
    const users = this.transformUsersRowToDomain(usersRow);
    return users;
  }

  async getAllQueryDto(): Promise<UsersQueryDto> {
    const usersRow = await this.model.findMany();
    return usersRow;
  }

  async save(user: User): Promise<User> {
    if (user.isNewUser()) {
      const { id } = await this.model.create({ data: { email: user.email } });
      const userId = UserId.create(id);
      return user.setUserId(userId);
    }

    return user;
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
