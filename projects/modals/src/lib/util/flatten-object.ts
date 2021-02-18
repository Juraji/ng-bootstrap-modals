export function flattenObject<V, R>(obj: Record<string, V>, mapper: (value: V) => R): Record<string, R> {
  const reducer = (o: Record<string, R>, k: string) => {
    o[k] = mapper(obj[k]);
    return o;
  };

  return Object.getOwnPropertyNames(obj).reduce(reducer, {});
}
