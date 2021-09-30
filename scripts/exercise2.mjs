import {
  updateCount,
  appendCount,
  checkLength,
} from "../utils/exercise2-utils.mjs";

let count = 0;
let inputStr = document.querySelector("#inputStr");

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
