import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const route = express.Router();

route.get('/', AppController.getHomepage);
route.get('/students', StudentsController.getAllStudents);
route.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default route;
