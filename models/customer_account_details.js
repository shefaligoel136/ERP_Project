const mongoose = require('mongoose');

const customerAD_Schema = new mongoose.Schema({
    bank_name:{
        type : String
    },
    account_type:{
        type : String
    },
    card_type:{
        type : String
    },
    isActive:{
        type : String
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'CustomerPd'
    }
},{
    timestamps:  true
});

const CustomerAD = mongoose.model('CustomerAD',customerAD_Schema);
module.exports = CustomerAD;