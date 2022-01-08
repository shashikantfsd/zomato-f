
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./Routes/index');

const app = express();

// const port = 5402;  we did commented requird in lopcal but not for herouk

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', routes);

// If you want to connect with the local mongoDB
//    - mongodb://127.0.0.1:27017/

// If you want to connect to the MongoDB Atlas
//   mongodb+srv://root:abcdefgh@cluster0.spcvd.gcp.mongodb.net/zomato?retryWrites=true&w=majority
//   - provide username, password and database name

mongoose.connect(
    'mongodb+srv://Zomato:zomato@cluster0.4tec8.mongodb.net/BZOMATO?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("Connected to MongoDB");
    // app.listen(port, () => {
    app.listen(process.env.PORT, () => {
        // console.log(`Server is running on ${port}`);
        console.log(`Server is running on ${process.env.PORT}`);
    });

}).catch(error => {
    console.log("Cannot connect to MongoDB: " + error);
});