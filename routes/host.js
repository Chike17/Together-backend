const
    verifyToken = require('../utils/utils');
    express = require('express');
    router = express.Router(),
    hostControllers = require('../controllers/host');

    
    router.post('/signup', hostControllers.signUp);

    router.post('/login', hostControllers.login);

    router.get('/', verifyToken, hostControllers.findAllHosts);

    router.get('/:id', verifyToken, hostControllers.findHostById);

    router.post('/', verifyToken, hostControllers.postHost);

    router.delete('/:id', verifyToken, hostControllers.deleteHost);

    router.put('/:id', verifyToken, hostControllers.updateHost);


module.exports = router;