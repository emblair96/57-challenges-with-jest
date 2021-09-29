import { exercise2 } from "./example.mjs";
import { updateCount, appendCount, checkLength } from "../utils/utils.mjs";

let count = exercise2.countVar;
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
