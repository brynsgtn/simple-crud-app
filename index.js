const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const port = process.env.PORT || 8000;
const url = process.env.MONGO_URI;

const app = express()


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node API Server')
});



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