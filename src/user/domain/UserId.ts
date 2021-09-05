export class UserId {
  private constructor(readonly value: number) {}
  static create(id: number): UserId {
    return new UserId(id);
  }
}

export class NewUserId {
  get value(): number {
    throw Error();
  }
  static create(): NewUserId {
    return new NewUserId();
  }
}
