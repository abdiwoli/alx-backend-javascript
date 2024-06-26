#!/usr/bin/node
//Let's build a Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;// eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

//Extending the Teacher class
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Directors extends Teacher {
   numberOfReports:number,
 }

//Write an interface for the function named printTeacherFunction.
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//Write a function printTeacher
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const printTeacher:printTeacherFunction = (firstName:string, lastName:string):string => `${firstName.charAt(0)}. ${lastName}`;

//The class should be described through an Interface
interface Student {
  firstName: string;
  lastName: string;
  displayName(): string;
  workOnHomework(): string;
}

//define class 
class StudentClass implements Student{
    firstName:string;
    lastName:string;
  constructor(firstName:string, lastName:string){
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework = ():string => 'Currently working';
  displayName = ():string => this.firstName;

 }


const student = new StudentClass("abdiwoli", "Hassen");
console.log(student.displayName())
console.log(student.workOnHomework())
