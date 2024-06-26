#!/usr/bin/node

/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
    export class Java extends Subject{
	getRequirements():string => "Here is the list of requirements for Java";
	getAvailableTeacher():string {
	    if (!this.teacher?.experienceTeachingReact) return 'No available teacher';
	    return `Available Teacher: ${this.teacher}`;
	}
    }
}
