const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRoutes = require('./src/route/userroute');
const productRoutes = require('./src/route/productroute');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://127.0.0.1:5500'}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mynewdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

// Use the UserRoutes
app.use('/users', UserRoutes);

//Use the productRoutes
app.use('/product',productRoutes);


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});

module.exports = app;
























