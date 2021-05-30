import { shallowClone, deepClone } from "./cloning";

interface Person {
  name: string;
  surname: string;
}

let people: Person[];

beforeEach(() => {
  people = [
    { name: "John", surname: "Doe" },
    { name: "Jane", surname: "Doe" },
  ];
});

describe("shallowClone", () => {
  it("creates a separate array", () => {
    const clone = shallowClone(people);

    clone.push({ name: "Jack", surname: "Smith" });

    expect(clone).toHaveLength(3);
    expect(people).toHaveLength(2);
  });

  it("shares objects in array", () => {
    const clone = shallowClone(people);

    clone[0].name = "Jack";

    expect(clone[0].name).toBe("Jack");
    expect(people[0].name).toBe("Jack");
  });
});

describe("deepClone", () => {
  it("creates a separate array", () => {
    const clone = deepClone(people);

    clone.push({ name: "Jack", surname: "Smith" });

    expect(clone).toHaveLength(3);
    expect(people).toHaveLength(2);
  });

  it("creates separate objects in array", () => {
    const clone = deepClone(people);

    clone[0].name = "Jack";

    expect(clone[0].name).toBe("Jack");
    expect(people[0].name).toBe("John");
  });
});
