export const userQuote = (e) => {
  return e.target.value;
};

export const quoteAuthor = (e) => {
  return e.target.value;
};

export const appendQuote = (quoteAuthor, userQuote) => {
  return `${quoteAuthor} says "${userQuote}"."`;
};
