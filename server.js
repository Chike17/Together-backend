const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require ('cors');

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(cors());


app.get('/', (req, res) => {
  res.send('hello world')
})


// app.use('/user', userRoutes);

// app.use('/api/tip', tipRoutes);

app.listen(3000, () => console.log("Listening on port 3000"))
 
