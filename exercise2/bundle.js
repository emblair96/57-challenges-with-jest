(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./utils":2}],2:[function(require,module,exports){
module.exports = {
  countVar: 0,
  updateCount: (e, countVar) => {
    if (e.key === "Backspace") {
      countVar--;
    } else {
      countVar++;
    }
    console.log(countVar, "++++");
    // utils.appendCount();
  },
  appendCount: (countVar, div) => {
    div.innerText = "";
    div.innerText = countVar;
    console.log(countVar, "????");
    console.log(div, "whatttt");
  },
  checkLength: (e, countVar) => {
    if (e.target.value.length === 0) {
      countVar = 0;
      // utils.appendCount();
    }
  },
};

// module.exports = { utils };

},{}]},{},[1]);
