const mongoose = require('mongoose');


const VaultSchema = new mongoose.Schema({
    data : {
        type : String,
        required : [true,'you should enter data'],
        unique : false
    }
});

const Vault = new mongoose.model('Vault' , VaultSchema);
module.exports = Vault ;