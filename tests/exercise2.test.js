const {
  updateCount,
  appendCount,
  checkLength,
} = require("../scripts/exercise2");

var evt = new KeyboardEvent("keydown");

beforeEach(() => {
  document.body.innerHTML =
    '<label for="inputStr">What is the input string?</label>' +
    '<input type="text" id="inputStr" />' +
    '<h2>Character count: <span id="charCount"></span></h2>';
  let inputStr = document.querySelector("#inputStr");
  eventListenerSpy = jest.spyOn(inputStr, "addEventListener");
  eventListenerSpy.mockImplementation((e, updateCount) => updateCount(evt));
});

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("Test updating count", () => {
  let charCount = document.querySelector("#charCount");
  inputStr.addEventListener("keydown", updateCount);
  inputStr.dispatchEvent(evt);
  expect(inputStr.addEventListener).toHaveBeenCalled();
});

// test("another test", () => {
//   expect(count).toBe(1);
// });
