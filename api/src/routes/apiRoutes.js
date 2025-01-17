// Importa o modúlo Router do express
// Router será utilizado para definir notas específicas na aplicação
const router = require('express').Router();

// Importa a controller onde contém a lógica relacionada a professores
const teacherController = require('../controllers/teacherController');

// Rota POST para '/teacher'
router.post('/teacher/',teacherController.postTeacher);
router.get('/teacher/',teacherController.getTeacher);

module.exports = router
