export function isNotNullish<T>(x: T): x is NonNullable<T> {
  return x != null;
}
