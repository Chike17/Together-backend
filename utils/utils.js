const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const verifyToken = router.use((req, res, next) => {
  console.log('activated');
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader);

  if (typeof bearerHeader !== 'undefined') {
    req.token = bearerHeader;
    const verified = jwt.verify(req.token, 'Griselda');
    console.log('here is the verified', verified);
    req.userId = verified._id;
    next();
  } else {
    res.sendStatus(403);
  }
});

module.exports = verifyToken;
