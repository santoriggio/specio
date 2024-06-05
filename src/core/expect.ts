import Failure from "../utils/Failure";

class Expect {
  constructor(private value: any) {}

  public toBe(expected: any) {
    if (typeof this.value !== typeof expected) {
      throw new Failure("Typeof è diverso");
    }

    if (this.value !== expected) {
      throw new Failure(`${this.value} e ${expected} non sono uguali`);
    }
  }
}

export default function expect(v: any): Expect {
  const _expect = new Expect(v);
  return _expect;
}
