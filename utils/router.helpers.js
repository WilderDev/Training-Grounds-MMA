export function pushNewRouterParams(arrSize, paramTerm, newValue, router) {
  if (arrSize < 1) delete router.query[paramTerm];
  if (arrSize > 0) router.query[paramTerm] = newValue;

  router.push(router, undefined, { shallow: true });
}
