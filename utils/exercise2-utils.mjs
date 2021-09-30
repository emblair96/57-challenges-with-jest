export const updateCount = (e, countVar) => {
  if (e.key === "Backspace") {
    countVar--;
  } else {
    countVar++;
  }
  appendCount(countVar);

  return countVar;
};

export const appendCount = (countVar) => {
  if (charCount) {
    charCount.innerText = "";
    charCount.innerText = countVar;
    return charCount.innerText;
  }
};

export const checkLength = (e, countVar) => {
  if (e.target.value.length === 0) countVar = 0;
  appendCount(countVar);

  return countVar;
};
