import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = (route) => {
  route.get('/', AppController.getHomepage);
  route.get('/students', StudentsController.getAllStudents);
  route.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default router;
module.exports = router;
