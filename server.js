
// importing required packages
const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();
 
// importing reqired modules

    

const mongoose = require('mongoose');


const conct = mongoose.connect('mongodb://localhost/student', {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});
console.log('mongodb connected')


 
//importing routes

const auth = require('./router');


 
// linking env folder

 
//connect to mongodb db.js in conf



 
//Route middleware
app.use(cors());
app.use(express.json());



 
//routing

app.use('/auth', auth);
 
//starting the server
app.listen(port, () => {
    console.log(`Server is up and running @ port: ${port}, lets start editing`)
});

 

