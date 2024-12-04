const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const port = process.env.PORT || 8000;
const url = process.env.MONGO_URI;

const app = express()


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// route
app.use('/api/products', productRoute);


// mongoDB connection
mongoose.connect(url)
  .then(() => {
    console.log('Connected to database!')
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
  .catch(()=> {
    console.log("Connection failed!")
  })