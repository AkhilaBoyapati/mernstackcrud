const mongoose = require('mongoose')
const studata =  new mongoose.Schema({
    FirstName:{
        type:String    
    },
    Phone:{
        type:String    
    }
})
module.exports = mongoose.model('students', studata)