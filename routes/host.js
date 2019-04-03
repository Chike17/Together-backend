const
    express = require('express');
    router = express.Router(),
    hostControllers = require('../controllers/host');
    jwt = require('jsonwebtoken');

    router.get('/', hostControllers.findAllHosts);

    router.get('/:id', hostControllers.findHostById);

    router.post('/', hostControllers.postHost);

    router.delete('/:id', hostControllers.deleteHost);

    router.put('/:id', hostControllers.updateHost);

module.exports = router;
