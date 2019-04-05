const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require ('cors');
const hostRoutes = require('./routes/host');
const guestRoutes = require('./routes/guest');
const eventRoutes = require('./routes/event');

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world')
});

app.use('/host', hostRoutes);

app.use('/guest', guestRoutes);

app.use('/event', eventRoutes);


app.listen(3000, () => console.log("Listening on port 3000"));
 
