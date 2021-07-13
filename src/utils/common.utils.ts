/**
 * Extract the keys of an object with the appropriate type.
 * Can be used safely with simple typed objects, but won't work
 * properly in polymorphed objects created by subclasses
 * of the expected type
 * @param o an iterable object
 * @returns a read-only array with the keys of the object
 */
export const objectKeys = <T, K extends keyof T>(
  o: T
): ReadonlyArray<keyof T> => [...Object.keys(o).map((k) => k as K)] as const;

type ObjectTuple<K extends keyof T, T> = readonly [K, T[K]];

const getTuple = <T, K extends keyof T>(o: T, key: K): ObjectTuple<K, T> =>
  [key, o[key]] as const;

/**
 * Maps the keys of an object with the appropriate type.
 * Type-safe equivalent of `Object.keys(o).map(cb)`
 * Can be used safely with simple typed objects, but won't work
 * properly in polymorphed objects created by subclasses
 * of the expected type
 * @param o an iterable object
 * @returns a read-only array with the result of the callback
 */
export const objectKeysMap = <T>(o: T) => <X>(
  cb: (entry: ObjectTuple<keyof T, T>) => X
) =>
  [...objectKeys(o).map((key) => cb(getTuple<T, typeof key>(o, key)))] as const;

/**
 * Flatten the reported key/value types of an object, simplifying its signature
 */
export type Compact<T> = {
  [K in keyof T]: T[K];
};
