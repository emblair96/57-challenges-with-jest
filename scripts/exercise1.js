// document.addEventListener("DOMContentLoaded", function () {
function init() {
  let outputDiv = document.querySelector("#output");
  let userName, outputStr;

  const promptForName = () => {
    userName = window.prompt("What is your name?");
  };

  const strConcat = (name) => {
    outputStr = `Hello, ${name}, nice to meet you!`;
    return outputStr;
  };

  function appendToPage(string) {
    let newP = document.createElement("p");
    newP.textContent = string;
    document.body.append(newP);
  }

  promptForName();
  strConcat(userName);
  appendToPage(outputStr);

  console.log(userName, "???");

  module.exports = { promptForName, strConcat, appendToPage };
}

init();
// });
