
    

const express = require('express');
const router = express.Router();
const studentdata = require("./student")

router.post('/user-get', (req, res) =>{
    const student = new studentdata({
        FirstName: req.body.FirstName,
        Phone: req.body.Phone

    })
    student.save();
    res.send('hi');

}); 

router.post('/', (req, res) => {
    res.send('hello');
}) 

 
module.exports = router;

