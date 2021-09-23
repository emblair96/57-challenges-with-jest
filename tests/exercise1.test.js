const {
  promptForName,
  strConcat,
  appendToPage,
} = require("../scripts/exercise1");

// ! determine how to fix  the window.prompt error

beforeEach(() => {
  promptSpy = jest.spyOn(window, "prompt");
  promptSpy.mockImplementation((input) => input);
  document.body.innerHTML = "";
});

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("mocking prompt for name & testing functionality", () => {
  const name = window.prompt("Emily");
  expect(promptSpy).toHaveBeenCalled();
  expect(name).toBeDefined();
});

test("String concatenation working properly", () => {
  expect(strConcat("Emily")).toBe("Hello, Emily, nice to meet you!");
  expect(strConcat("Melanie Blair")).toBe(
    "Hello, Melanie Blair, nice to meet you!"
  );
});

test("Appending string to the dom", () => {
  let string = strConcat("Emily");

  appendToPage(string);
  expect(document.body.innerHTML).toBe(
    "<p>Hello, Emily, nice to meet you!</p>"
  );
});
