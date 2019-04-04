const
    express = require('express');
    router = express.Router(),
    eventControllers = require('../controllers/event');

    router.get('/', eventControllers.findAllEvents);

    router.get('/:id', eventControllers.findEventById);

    router.post('/:hostId', eventControllers.postEvent);

    router.delete('/:id', eventControllers.deleteEvent);

    router.put('/:id', eventControllers.updateEvent);

module.exports = router;