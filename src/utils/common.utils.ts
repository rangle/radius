export const objectKeys = <T, K extends keyof T>(
  o: T
): ReadonlyArray<keyof T> => [...Object.keys(o).map((k) => k as K)] as const;

type ObjectTuple<K extends keyof T, T> = readonly [K, T[K]];

const getTuple = <T, K extends keyof T>(o: T, key: K): ObjectTuple<K, T> =>
  [key, o[key]] as const;

export const objectKeysMap = <T>(o: T) => <X>(
  cb: (entry: ObjectTuple<keyof T, T>) => X
) =>
  [...objectKeys(o).map((key) => cb(getTuple<T, typeof key>(o, key)))] as const;

export type Compact<T> = {
  [K in keyof T]: T[K];
};
