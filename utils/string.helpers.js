export function toTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function toTitleCases(words) {
  const wordArr = words.split(" ");
  const capatalizedWordArr = wordArr.map((word) => toTitleCase(word));
  const dehyphenatedArr = capatalizedWordArr
    .join(" ")
    .split("-")
    .map((word) => toTitleCase(word));
  return dehyphenatedArr.join(" ");
}

export function toLowerCaseHyphenated(words) {
  return words
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}

export function toSmallKebabCase(text) {
  return text.split(" ").join("-").replace(/'/g, "").toLowerCase();
}
