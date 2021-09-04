import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export class User {
  private constructor(private id: UserId, private email: UserEmail) {}

  static create(id: UserId, email: UserEmail): User {
    return new User(id, email);
  }

  toJson(): { id: number; email: string } {
    return { id: this.id.value, email: this.email.value };
  }
}
