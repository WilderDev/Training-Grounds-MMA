export function pushNewRouterParams(arrSize, paramTerm, newValue, router) {
  if (arrSize < 1) delete router.query[paramTerm];
  if (arrSize > 0) router.query[paramTerm] = newValue;

  router.push(router, undefined, { shallow: true });
}

export function toggleRouterQuery(queryTerm, router) {
  // IX_TSK
  // if (router.query[queryTerm]) {
  //   console.log("router.query[queryTerm]:", router.query[queryTerm]);
  //   router.query[queryTerm] = toLowerCaseHyphenated(queryTerm.name);
  // } else {
  //   delete router.query[queryTerm];
  // }
  // router.push(router, undefined, { shallow: true });
}
