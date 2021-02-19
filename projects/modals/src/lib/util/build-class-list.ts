export type ClassMap<T> = Partial<Record<keyof T, string>>;

export const buildClassList = <T>(obj: T, defaultClassnames: string = '', classNameMap: ClassMap<T>): string => {
  const keys = Object.getOwnPropertyNames(classNameMap) as (keyof T)[];
  return keys
    .filter(property => !!classNameMap[property] && !!obj[property])
    .map(property => classNameMap[property])
    .reduce((p, c) => p + ' ' + c, defaultClassnames);
};
