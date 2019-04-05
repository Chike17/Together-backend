const
    verifyToken = require('../utils/utils');
    express = require('express');
    router = express.Router(),
    guestControllers = require('../controllers/guest');

    
    router.get('/', verifyToken, guestControllers.findAllGuests);

    router.get('/:id', verifyToken, guestControllers.findGuestById);

    router.post('/', verifyToken, guestControllers.postGuest);

    router.delete('/:id', verifyToken, guestControllers.deleteGuest);

    router.put('/:id', verifyToken, guestControllers.updateGuest);

module.exports = router;