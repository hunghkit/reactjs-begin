const express = require('express');
const router = express.Router();
const Task = require('./task');

router.get('/tasks', Task.index);
router.post('/tasks', Task.create);
router.put('/tasks/:_id', Task.update);
router.delete('/tasks/:_id', Task.destroy);

module.exports = router;
