const Employee = require("./lib/Employee");

// describe the class and it what should pass
describe("Employee class", () => {
  it("should create a html", () => {
    const text = "html";

    const obj = new Employee(text);

    expect(obj.text).toEqual(text);
  });

  it("should throw an error if not provided a 'text' value", () => {
    const cb = () => new Employee();
    const err = new Error();

    // Assert
    expect(cb).toThrowError(err);
  });
});
