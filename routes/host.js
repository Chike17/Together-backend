const
    express = require('express');
    router = express.Router(),
    hostControllers = require('../controllers/host');
    jwt = require('jsonwebtoken');

    router.get('/', hostControllers.findAllHosts);

    // router.get('/:id', tipControllers.findHostById);

    // router.post('/', tipControllers.postHost);

    // router.delete('/:id', tipControllers.deleteHost);

    // router.put('/:id', tipControllers.updateHost);

module.exports = router;
