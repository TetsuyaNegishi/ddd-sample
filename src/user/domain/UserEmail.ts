export class UserEmail {
  private constructor(readonly value: string) {}
  static create(email: string): UserEmail {
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      throw new Error();
    }
    return new UserEmail(email);
  }
}
