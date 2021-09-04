import { Users } from "../domain/Users";

export interface IUserService {
  getAll(): Promise<Users>;
}
