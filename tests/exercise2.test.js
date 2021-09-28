const {
  updateCount,
  appendCount,
  checkLength,
} = require("../scripts/exercise2.mjs");

var evt = new KeyboardEvent("keydown", { keycode: 65 });

beforeEach(() => {
  document.body.innerHTML =
    '<label for="inputStr">What is the input string?</label>' +
    '<input type="text" id="inputStr" />' +
    '<h2>Character count: <span id="charCount"></span></h2>';
  let inputStr = document.querySelector("#inputStr");
  let charCount = document.querySelector("#charCount");

  let eventListenerSpy = jest.spyOn(inputStr, "addEventListener");
  eventListenerSpy.mockImplementation((e, updateCount) => updateCount(evt));
});

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("Test keydown event listener", () => {
  inputStr.addEventListener("keydown", updateCount);
  inputStr.dispatchEvent(evt);
  expect(inputStr.addEventListener).toHaveBeenCalled();
  // appendCount();

  // expect(fns.appendCount).toHaveBeenCalled();
});

// test("updateCount should call appendCount", () => {
//   jest.mock("../scripts/example.mjs", () => ({
//     countVar: 1,
//   }));
//   let globalVars = jest.mock("../scripts/example.mjs");
//   console.log(globalVars.countVar);
//   // exercise2.set("count", 1);
//   appendCount();
//   expect(charCount.textContent).toBe(1);
// });
