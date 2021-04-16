const Intern = require("./lib/Intern");

// describe the class and it what should pass
describe("Intern class", () => {
  it("should create a html", () => {
    const text = "html";

    const obj = new Intern(text);

    expect(obj.text).toEqual(text);
  });

  it("should throw an error if not provided a 'text' value", () => {
    const cb = () => new Intern();
    const err = new Error();

    // Assert
    expect(cb).toThrowError(err);
  });
});
