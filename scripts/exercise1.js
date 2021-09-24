function init() {
  let userName, outputStr;

  const promptForName = () => {
    return window.prompt("What is your name?");
  };

  const strConcat = (name) => {
    return `Hello, ${name}, nice to meet you!`;
    // return outputStr;
  };

  function appendToPage(str) {
    let newP = document.createElement("p");
    newP.textContent = str;
    document.body.append(newP);
  }

  userName = promptForName();
  outputStr = strConcat(userName);
  appendToPage(outputStr);

  module.exports = { promptForName, strConcat, appendToPage };
}

init();

// document.addEventListener("DOMContentLoaded", function () {

// });
