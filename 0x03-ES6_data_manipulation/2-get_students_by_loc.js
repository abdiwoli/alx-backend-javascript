export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((ob) => ob.location === city);
  }
  return [];
}
