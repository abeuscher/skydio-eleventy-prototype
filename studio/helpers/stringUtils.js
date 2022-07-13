export function pluralize(single, plural, arr) {
  if (arr.length > 1) {
    return plural;
  }
  return single;
}
