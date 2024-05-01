#!/usr/bin/node
//Create the DirectorInterface interface with the 3 expected methods:
interface DirectorInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
}

//Create the TeacherInterface interface with the 3 expected methods:
interface TeacherInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks():string;
}

//Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
    workFromHome = ():string => 'Working from home';
    getCoffeeBreak = ():string => 'Getting a coffee break';
    workDirectorTasks = ():string => 'Getting to director tasks';
}

//Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home';
    getCoffeeBreak = () => 'Cannot have a break';
    workTeacherTasks = () => 'Getting to work';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createEmployee (salary: string | number ): Director | Teacher{
    if (typeof salary === 'number' && salary  < 500) {
        return new Teacher()
    }
    else {
        return new Director();
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isDirector(employee: Teacher | Director):  employee is Director {
    return employee instanceof Director;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function executeWork(employee: Teacher | Director){
    if (employee instanceof Director){
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = "Math" | "History";
const teachClass = (todayClass: Subjects):string => {
    if (todayClass === 'Math'){
        return 'Teaching Math'
    }
    return 'Teaching History'
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

