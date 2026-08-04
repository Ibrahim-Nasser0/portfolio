export function localized<T>(enValue: T, arValue: T | undefined, locale: string): T {
  if (locale === "ar" && arValue !== undefined && arValue !== null && arValue !== "") {
    return arValue;
  }
  return enValue;
}
