import { UserEmail } from "./UserEmail";
import { NewUserId, UserId } from "./UserId";

export class User {
  private constructor(
    private id: UserId | NewUserId,
    private _email: UserEmail
  ) {}

  static create(id: UserId, email: UserEmail): User {
    return new User(id, email);
  }

  get email(): string {
    return this._email.value;
  }

  setUserId(userId: UserId): User {
    this.id = userId;
    return this;
  }

  isNewUser(): boolean {
    if (this.id instanceof NewUserId) {
      return true;
    }
    return false;
  }

  toJson(): { id: number; email: string } {
    return { id: this.id.value, email: this._email.value };
  }
}
