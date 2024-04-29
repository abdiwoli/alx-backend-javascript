export default function cleanSet(set, startString) {
  if (startString === '') { return ''; }
  return [...set].filter((val) => val.startsWith(startString)).join('-');
}
