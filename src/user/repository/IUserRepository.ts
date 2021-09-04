import { Users } from "../domain/Users";

export interface IUserRepository {
  getAll(): Promise<Users>;
}
