export class UserId {
  private constructor(readonly value: number) {}
  static create(id: number): UserId {
    return new UserId(id);
  }
}
