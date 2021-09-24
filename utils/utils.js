const exercise1 = {};

const exercise2 = {
  promptForInput: () => {
    return window.prompt("What is the input string?");
  },
  countChars: (str) => {
    return str.length;
  },
  displayOutput: (str, length) => {
    document.body.innerHTML = `<p>${str} has ${length} characters.</p>`;
  },
};

module.exports = { exercise2 };
