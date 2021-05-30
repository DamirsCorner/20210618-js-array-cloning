export function shallowClone<T>(array: T[]): T[] {
  return [...array];
}

export function deepClone<T>(array: T[]): T[] {
  return JSON.parse(JSON.stringify(array));
}
