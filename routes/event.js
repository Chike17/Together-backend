const
    verifyToken = require('../utils/utils');
    express = require('express');
    router = express.Router(),
    eventControllers = require('../controllers/event');

    router.get('/', verifyToken, eventControllers.findAllEvents);

    router.get('/:id', verifyToken, eventControllers.findEventById);

    router.post('/:hostId', verifyToken, eventControllers.postEvent);

    router.delete('/:id', verifyToken, eventControllers.deleteEvent);

    router.put('/:id', verifyToken, eventControllers.updateEvent);

module.exports = router;