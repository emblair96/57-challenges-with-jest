function init() {
  let count = 0;
  let inputStr = document.querySelector("#inputStr");
  let charCount = document.querySelector("#charCount");

  const updateCount = (e) => {
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
  };

  const checkLength = (e) => {
    if (e.target.value.length === 0) count = 0;
    appendCount();
  };

  document.addEventListener("DOMContentLoaded", function () {
    inputStr.addEventListener("keydown", updateCount);
    inputStr.addEventListener("keyup", checkLength);
  });

  module.exports = {
    updateCount,
    appendCount,
    checkLength,
    count,
  };
}

init();
