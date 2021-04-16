const Manager = require("./lib/Manager");

// describe the class and it what should pass
describe("Manager class", () => {
  it("should create a html", () => {
    const text = "html";

    const obj = new Manager(text);

    expect(obj.text).toEqual(text);
  });

  it("should throw an error if not provided a 'text' value", () => {
    const cb = () => new Manager();
    const err = new Error();

    // Assert
    expect(cb).toThrowError(err);
  });
});
