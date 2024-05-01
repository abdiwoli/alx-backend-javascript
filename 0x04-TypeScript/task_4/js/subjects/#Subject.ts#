#!/usr/bin/node
import {Subjects} from './Teacher.js';
namespace Subjects {
    class Subject {
	private _teacher: Teacher;
	constructor(teacher:Teacher) {
	    this._teacher = teacher;
	}
	teacher implements Teacher;

	setTeacher(teacher) void {
	    this._teacher = teacher;
	}
	
	get teacher() Teacher {return this._teacher;}
    }
}
