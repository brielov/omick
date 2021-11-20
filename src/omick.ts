type PlainObject = { [key: string]: unknown };

/**
 * Create a new object containing only the specified keys
 */
export const pick = <T extends PlainObject, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Pick<T, K> =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key as K)),
  ) as Pick<T, K>;

/**
 * Create a new object excluding the specified keys
 */
export const omit = <T extends PlainObject, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K)),
  ) as Omit<T, K>;
