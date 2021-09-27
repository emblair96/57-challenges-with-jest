const updateCount = (e) => {
  if (e.key === "Backspace") {
    count--;
  } else {
    count++;
  }
  // appendCount();
};
document.addEventListener("DOMContentLoaded", function () {});
module.exports = {
  // promptForInput,
  // countChars,
  // displayOutput,
  updateCount,
};
