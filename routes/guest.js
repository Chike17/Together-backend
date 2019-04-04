const
    express = require('express');
    router = express.Router(),
    guestControllers = require('../controllers/guest');
    jwt = require('jsonwebtoken');

    router.get('/', guestControllers.findAllGuests);

    router.get('/:id', guestControllers.findGuestById);

    router.post('/', guestControllers.postGuest);

    router.delete('/:id', guestControllers.deleteGuest);

    router.put('/:id', guestControllers.updateGuest);

module.exports = router;