export default function cleanSet(set, startString) {
  const allStrings = [...set].every((item) => typeof item === 'string');
  if (startString === '' || !(set instanceof Set) || typeof startString !== 'string' || !allStrings) {
    return '';
  }
  const idx = startString.length;

  return [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(idx))
    .join('-');
}
