export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  let idx = 0;
  for (const value of array) {
    array2[idx] = appendString + value;
    idx += 1;
  }

  return array2;
}
