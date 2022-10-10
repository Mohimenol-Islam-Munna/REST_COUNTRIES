const findCapitalizeWordSentence = (sentence) => {
  const splitSentence = sentence.split(" ");

  const findMatchWords = splitSentence.filter(
    (word) => word[0].toUpperCase() === word[0]
  );

  return findMatchWords.join(" ");
};

const result = findCapitalizeWordSentence("We love Bangladeshi food");

console.log("result ::", result);
