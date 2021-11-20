import { omit, pick } from "./omick";

const obj = { id: 1, name: "John", email: "john@doe.com", password: "123456" };

describe(".pick()", () => {
  it("returns a new object with only the specified keys", () => {
    const result = pick(obj, "id", "name");
    expect(result).toEqual({ id: 1, name: "John" });
    expect(result).not.toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
  });
});

describe(".omit()", () => {
  it("returns a new object without the specified keys", () => {
    const result = omit(obj, "id", "name");
    expect(result).toEqual({ email: "john@doe.com", password: "123456" });
    expect(result).not.toHaveProperty("id");
    expect(result).not.toHaveProperty("name");
  });
});
