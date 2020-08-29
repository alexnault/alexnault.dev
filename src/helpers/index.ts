export function toKebabCase(value: string) {
  return value.replace(new RegExp("(\\s|_|-)+", "gmi"), "-");
}
