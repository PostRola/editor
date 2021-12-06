

export function omit<T extends keyof X, X>(fields: T[], object: X): Omit<X, T> {

  const toReturn = { ...object };

  fields.forEach((f) => delete toReturn[f]);

  return toReturn;
}
