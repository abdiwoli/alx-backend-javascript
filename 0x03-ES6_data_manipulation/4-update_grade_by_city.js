export default function updateStudentGradeByCity(data, city, grades) {
  // Check if city exists and grades are available (optional)

  const studentGrades = grades.reduce((acc, curr) => {
    acc[curr.studentId] = curr.grade;
    return acc;
  }, {});

  return data
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: studentGrades[student.id] || 'N/A',
    }));
}
