export default function getStudentIdsSum(arr) {
  return arr.map((el) => el.id).reduce((x, y) => x + y, 0);
}
