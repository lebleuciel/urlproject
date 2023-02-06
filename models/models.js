const mongoose = require('mongoose');


const VaultSchema = new mongoose.Schema({
    data : {
        type : String,
        required : [true,'you should enter data'],
        unique : false
    },
    url : {
        type : String,
        required : [false,'your url will be set automatically'],
        unique : false
    }
});

const Vault = new mongoose.model('Vault' , VaultSchema);
module.exports = Vault ;

