export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((arr) => arr.id);
  }
  return [];
}
