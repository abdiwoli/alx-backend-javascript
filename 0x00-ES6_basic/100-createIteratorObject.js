export default function createIteratorObject(report) {
  const arr = [];
  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      arr.push(...report.allEmployees[key]);
    }
  }
  return arr;
}
