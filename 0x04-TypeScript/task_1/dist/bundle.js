/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("//#!/usr/bin/node\n//Write a function printTeacher\nconst printTeacher = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;\n//define class \nclass StudentClass {\n    constructor(firstName, lastName) {\n        this.workOnHomework = () => 'Currently working';\n        this.displayName = () => this.firstName;\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n}\nconst student = new StudentClass(\"abdiwoli\", \"Hassen\");\nconsole.log(student.displayName());\nconsole.log(student.workOnHomework());\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;