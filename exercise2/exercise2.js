document.addEventListener("DOMContentLoaded", function () {
  const {
    updateCount,
    // appendCount,
    checkLength,
    countVar,
  } = require("./utils");
  console.log(typeof updateCount);
  // function init() {
  let stringInput, stringLength;
  let inputStr = document.querySelector("#inputStr");
  let charCount = document.querySelector("#charCount");
  let count = 0;

  const appendCount = () => {
    console.log(count, "????");
    // let empty = checkLength(inputStr.value.length);
    // if (empty) count = 0;
    charCount.innerText = "";
    charCount.innerText = count;
  };

  inputStr.addEventListener("keydown", (e) => updateCount(e));
  inputStr.addEventListener("keydown", appendCount);
  inputStr.addEventListener("keyup", (e) => checkLength(e));
  // inputStr.addEventListener("keyup", appendCount);

  const promptForInput = () => {
    return window.prompt("What is the input string?");
  };

  const countChars = (str) => {
    if (str) {
      return str.length;
    }

    if (!str) {
      alert("You must enter at least one character.");
    }
  };

  const displayOutput = (str, length) => {
    document.body.innerHTML = `<p>${str} has ${length} characters.</p>`;
  };

  // stringInput = promptForInput();
  // stringLength = countChars(stringInput);
  // if (stringLength) {
  //   displayOutput(stringInput, stringLength);
  // }

  module.exports = {
    promptForInput,
    countChars,
    displayOutput,
    updateCount,
    appendCount,
  };
  // }

  // init();
});

// const updateCount = (e) => {
//   if (e.key === "Backspace") {
//     count--;
//   } else {
//     count++;
//   }
//   // appendCount();
// };

// const checkLength = (e) => {
//   if (e.target.value.length === 0) {
//     count = 0;
//     // appendCount();
//   }
// };
