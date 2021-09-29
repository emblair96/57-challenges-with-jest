const {
  updateCount,
  appendCount,
  checkLength,
} = require("../scripts/exercise2.mjs");

var keydownEvt = new KeyboardEvent("keydown", { keycode: 65 });
var keyupEvt = new KeyboardEvent("keyup");

beforeEach(() => {
  document.body.innerHTML =
    '<label for="inputStr">What is the input string?</label>' +
    '<input type="text" id="inputStr" />' +
    '<h2>Character count: <span id="charCount"></span></h2>';
  let charCount = document.querySelector("#charCount");
});

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test("Test keydown event listener", () => {
  let eventListenerSpy = jest.spyOn(inputStr, "addEventListener");

  inputStr.addEventListener("keydown", updateCount);
  inputStr.addEventListener("keyup", checkLength);

  inputStr.dispatchEvent(keydownEvt);
  inputStr.dispatchEvent(keyupEvt);

  expect(eventListenerSpy).toHaveBeenCalled();
  expect(eventListenerSpy.mock.calls.length).toBe(2);
  expect(eventListenerSpy).toHaveBeenCalledWith("keyup", checkLength);
});

// test("updateCount & checkLength update count variable", () => {
//   let inputStr = document.querySelector("#inputStr");

//   let countTest = 0;
//   // countTest = updateCount("keydown", countTest);
//   // expect(countTest).toBe(1);
//   inputStr.value = "hello";
//   let inputEvent = new Event("input");
//   inputStr.dispatchEvent(inputEvent);

//   countTest = checkLength(inputEvent, countTest);
//   expect(countTest).toBe(3);
// });
