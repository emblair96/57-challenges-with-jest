function init() {
  let userName, outputStr;

  const promptForName = () => {
    return window.prompt("What is your name?");
  };

  const strConcat = (name) => {
    if (!name) return "Please enter your name when prompted.";
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
