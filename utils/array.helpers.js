import { toTitleCases, toLowerCaseHyphenated } from "./string.helpers";

export function createArrayFromMultipleParams(params) {
  if (!params) return [];
  return params.split(",").map((param) => toTitleCases(param));
}

export function createParamsFromArray(array) {
  if (array.length < 1) return null;
  return array.map((item) => toLowerCaseHyphenated(item)).join(",");
}
