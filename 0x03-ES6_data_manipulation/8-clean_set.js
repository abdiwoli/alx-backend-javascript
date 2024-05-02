export default function cleanSet(set, startString) {
  if (startString === '' || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const idx = startString.length;

  return [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(idx))
    .join('-');
}
