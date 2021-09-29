// function init() {

import { exercise2 } from "./example.mjs";
import { updateCount, appendCount, checkLength } from "../utils/utils.mjs";

let count = exercise2.countVar;
let inputStr = document.querySelector("#inputStr");
let charCount = document.querySelector("#charCount");

document.addEventListener("DOMContentLoaded", function () {
  inputStr.addEventListener("keydown", (e) => {
    count = updateCount(e, count);
  });

  inputStr.addEventListener("keyup", (e) => {
    count = checkLength(e, count);
  });
});

module.exports = {
  updateCount,
  appendCount,
  checkLength,
  count,
};
// }

// init();

// const updateCount = (e) => {
//   if (e.key === "Backspace") {
//     count--;
//   } else {
//     count++;
//   }
//   appendCount();
// };

// const appendCount = () => {
//   if (charCount) {
//     charCount.innerText = "";
//     charCount.innerText = count;
//   }
// };

// const checkLength = (e) => {
//   if (e.target.value.length === 0) count = 0;
//   appendCount();
// };
