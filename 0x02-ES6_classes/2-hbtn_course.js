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
      throw new TypeError('TypeError: Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('TypeError: Length must be a Number');
    }
  }

  set students(students) {
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('TypeError: Students must be an array of strings');
    }
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }
}
