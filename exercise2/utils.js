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

const appendCount = () => {
  console.log(count, "????");
  // let empty = checkLength(inputStr.value.length);
  // if (empty) count = 0;
  charCount.innerText = "";
  charCount.innerText = count;
};

const updateCount = (e) => {
  if (e.key === "Backspace") {
    count--;
  } else {
    count++;
  }
  appendCount();
};

// module.exports = { utils };
