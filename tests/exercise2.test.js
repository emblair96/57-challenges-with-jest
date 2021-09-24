const {
  promptForInput,
  countChars,
  displayOutput,
} = require("../scripts/exercise2");

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

test("Test prompt on page load", () => {
  let str = window.prompt("What is the string input?");
  expect(promptSpy).toHaveBeenCalled();
  expect(str).toBeDefined();
});

test("String length function", () => {
  expect(countChars("Hello")).toBe(5);
  expect(countChars("hello")).toBe(5);
  expect(countChars("goodbye")).toBe(7);
});

test("Appending output to the page", () => {
  let testLength = countChars("hello");
  displayOutput("hello", testLength);

  expect(document.body.innerHTML).toBe("<p>hello has 5 characters.</p>");
});
