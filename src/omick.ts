/**
 * Create a new object containing only the specified keys
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Pick<T, K> {
  const result = Object.create(null);
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

/**
 * Create a new object excluding the specified keys
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const result = Object.create(null);
  for (const k in obj) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (keys.includes(k as any)) continue;
    result[k] = obj[k];
  }
  return result;
}
