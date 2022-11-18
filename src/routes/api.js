const express = require('express');
const helloController = require('../controllers/helloController');
const studentsController = require('../controllers/studentController');
const router = express.Router();
router.get('/hello-get',helloController.hello);
router.post('/hello-post',helloController.hello);
router.post('/insertStudent',studentsController.insertStudent);
router.get('/readStudent',studentsController.readStudent)
router.get('/deleteStudent/:id',studentsController.deleteStudent)

module.exports = router;