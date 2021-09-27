function init() {
  let count = 0;
  let inputStr = document.querySelector("#inputStr");
  let charCount = document.querySelector("#charCount");

  const updateCount = (e) => {
    console.log("event time!", e);
    if (e.key === "Backspace") {
      count--;
    } else {
      count++;
    }
    appendCount();
  };

  const appendCount = () => {
    if (charCount) {
      charCount.innerText = "";
      charCount.innerText = count;
    }
    // let empty = checkLength(inputStr.value.length);
    // if (empty) count = 0;
  };

  const checkLength = (e) => {
    if (e.target.value.length === 0) count = 0;
    appendCount();
  };

  // const promptForInput = () => {
  //   return window.prompt("What is the input string?");
  // };

  // const countChars = (str) => {
  //   if (str) {
  //     return str.length;
  //   }

  //   if (!str) {
  //     alert("You must enter at least one character.");
  //   }
  // };

  // const displayOutput = (str, length) => {
  //   document.body.innerHTML = `<p>${str} has ${length} characters.</p>`;
  // };

  // stringInput = promptForInput();
  // stringLength = countChars(stringInput);
  // if (stringLength) {
  //   displayOutput(stringInput, stringLength);
  // }

  module.exports = {
    updateCount,
    appendCount,
    checkLength,
    count,
  };
}

init();
document.addEventListener("DOMContentLoaded", function () {
  inputStr.addEventListener("keydown", updateCount);
  inputStr.addEventListener("keyup", checkLength);
});
