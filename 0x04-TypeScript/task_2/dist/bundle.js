/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
//#!/usr/bin/node
//Create a class Director that will implement DirectorInterface
class Director {
    constructor() {
        this.workFromHome = () => 'Working from home';
        this.getCoffeeBreak = () => 'Getting a coffee break';
        this.workDirectorTasks = () => 'Getting to director tasks';
    }
}
//Create a class Teacher that will implement TeacherInterface
class Teacher {
    constructor() {
        this.workFromHome = () => 'Cannot work from home';
        this.getCoffeeBreak = () => 'Cannot have a break';
        this.workTeacherTasks = () => 'Getting to work';
    }
}
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
const teachClass = (todayClass) => {
    if (todayClass == 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
};
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWVBLCtEQUErRDtBQUMvRCxNQUFNLFFBQVE7SUFBZDtRQUNJLGlCQUFZLEdBQUcsR0FBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDaEQsbUJBQWMsR0FBRyxHQUFVLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RCxzQkFBaUIsR0FBRyxHQUFVLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUNqRSxDQUFDO0NBQUE7QUFFRCw2REFBNkQ7QUFDN0QsTUFBTSxPQUFPO0lBQWI7UUFDSSxpQkFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQzdDLG1CQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDL0MsQ0FBQztDQUFBO0FBR0QsU0FBUyxjQUFjLENBQUUsTUFBdUI7SUFDNUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxPQUFPLEVBQUU7SUFDeEIsQ0FBQztTQUNJLENBQUM7UUFDRixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksUUFBUSxZQUFZLFFBQVEsRUFBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO1NBQ0ksQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0FBQ0wsQ0FBQztBQUdELE1BQU0sVUFBVSxHQUFHLENBQUMsVUFBb0IsRUFBUyxFQUFFO0lBQy9DLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBQyxDQUFDO1FBQzdCLE9BQU8sZUFBZTtJQUNuQixDQUFDO0lBQ0QsT0FBTyxrQkFBa0I7QUFDN0IsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL25vZGVcbi8vQ3JlYXRlIHRoZSBEaXJlY3RvckludGVyZmFjZSBpbnRlcmZhY2Ugd2l0aCB0aGUgMyBleHBlY3RlZCBtZXRob2RzOlxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTpzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTpzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTpzdHJpbmc7XG59XG5cbi8vQ3JlYXRlIHRoZSBUZWFjaGVySW50ZXJmYWNlIGludGVyZmFjZSB3aXRoIHRoZSAzIGV4cGVjdGVkIG1ldGhvZHM6XG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6c3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6c3RyaW5nO1xuICAgIHdvcmtUZWFjaGVyVGFza3MoKTpzdHJpbmc7XG59XG5cbi8vQ3JlYXRlIGEgY2xhc3MgRGlyZWN0b3IgdGhhdCB3aWxsIGltcGxlbWVudCBEaXJlY3RvckludGVyZmFjZVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lID0gKCk6c3RyaW5nID0+ICdXb3JraW5nIGZyb20gaG9tZSc7XG4gICAgZ2V0Q29mZmVlQnJlYWsgPSAoKTpzdHJpbmcgPT4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICAgIHdvcmtEaXJlY3RvclRhc2tzID0gKCk6c3RyaW5nID0+ICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbn1cblxuLy9DcmVhdGUgYSBjbGFzcyBUZWFjaGVyIHRoYXQgd2lsbCBpbXBsZW1lbnQgVGVhY2hlckludGVyZmFjZVxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSA9ICgpID0+ICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuICAgIGdldENvZmZlZUJyZWFrID0gKCkgPT4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICAgIHdvcmtUZWFjaGVyVGFza3MgPSAoKSA9PiAnR2V0dGluZyB0byB3b3JrJztcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZSAoc2FsYXJ5OiBzdHJpbmcgfCBudW1iZXIgKTogRGlyZWN0b3IgfCBUZWFjaGVye1xuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgIDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiAgZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogVGVhY2hlciB8IERpcmVjdG9yKXtcbiAgICBpZiAoZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcil7XG5cdGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcblx0Y29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcbiAgICB9XG59XG5cbnR5cGUgU3ViamVjdHMgPSBcIk1hdGhcIiB8IFwiSGlzdG9yeVwiO1xuY29uc3QgdGVhY2hDbGFzcyA9ICh0b2RheUNsYXNzOiBTdWJqZWN0cyk6c3RyaW5nID0+IHtcbiAgICBpZiAodG9kYXlDbGFzcyA9PSAnTWF0aCcpe1xuXHRyZXR1cm4gJ1RlYWNoaW5nIE1hdGgnXG4gICAgfVxuICAgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSdcbn1cblxuY29uc29sZS5sb2codGVhY2hDbGFzcygnTWF0aCcpKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==