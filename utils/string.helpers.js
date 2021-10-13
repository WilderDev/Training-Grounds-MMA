// Tsk make this work with words like muay-thai
export function toTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function toTitleCases(words) {
  const wordArr = words.split(" ");
  const capatalizedWordArr = wordArr.map((word) => {
    return toTitleCase(word);
  });
  return capatalizedWordArr.join(" ");
}
