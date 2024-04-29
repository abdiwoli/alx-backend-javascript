export default function updateStudentGradeByCity(data, city, grades) {
  return data
    .filter((stu) => stu.location === city)
    .map((obj) => ({
      id: obj.id,
      fisrtName: obj.firstName,
      location: obj.location,
      grade: grades.map((el) => (el.studentId === obj.id ? el.grade : ['N/A']))[0],

    }));
}
