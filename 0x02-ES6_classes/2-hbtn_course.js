export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a Number');
    }
  }

  set students(students) {
    if (Array.isArray(students) && students.every((element) => typeof element === 'string')) {
      this._students = students;
    } else {
      throw new Error('TypeError: Students must be a array of strings');
    }
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }
}
