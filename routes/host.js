const verifyToken = require('../utils/utils');
const express = require('express');
const router = express.Router();
const hostControllers = require('../controllers/host');

router.post('/signup', hostControllers.signUp);

router.get('/login', hostControllers.login);

router.get('/', verifyToken, hostControllers.findAllHosts);

router.get('/:id', verifyToken, hostControllers.findHostById);

router.post('/', verifyToken, hostControllers.postHost);

router.delete('/:id', verifyToken, hostControllers.deleteHost);

router.put('/:id', verifyToken, hostControllers.updateHost);

module.exports = router;
