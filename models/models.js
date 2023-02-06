const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'a person must have a name'],
        unique : false
    },
    password : {
        type : String,
        required : true ,
    }
});

const Person = new mongoose.model('Person' , personSchema);
module.exports = Person ;