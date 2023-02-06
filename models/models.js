const mongoose = require('mongoose');


const VaultSchema = new mongoose.Schema({
    data : {
        type : String,
        required : [true,'you should enter data'],
        unique : false
    }
});

const vault = new mongoose.model('vault' , data);
module.exports = vault ;