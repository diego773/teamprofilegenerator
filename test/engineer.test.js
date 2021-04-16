const Engineer = require("./lib/Engineer");

// describe the class and it what should pass
describe("Engineer class", () => {
  it("should create a html", () => {
    const text = "html";

    const obj = new Engineer(text);

    expect(obj.text).toEqual(text);
  });

  it("should throw an error if not provided a 'text' value", () => {
    const cb = () => new Engineer();
    const err = new Error();

    // Assert
    expect(cb).toThrowError(err);
  });
});
