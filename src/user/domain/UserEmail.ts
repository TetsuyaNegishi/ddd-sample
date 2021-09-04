export class UserEmail {
  private constructor(readonly value: string) {}
  static create(email: string): UserEmail {
    return new UserEmail(email);
  }
}
