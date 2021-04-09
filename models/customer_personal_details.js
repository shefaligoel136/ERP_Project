const mongoose = require('mongoose');

const customerPD_Schema = new mongoose.Schema({
    first_name : {
        type : String,
        // required: true
    },
    last_name : {
        type : String,
        // required: true
    },
    phone : {
        type : String,
        // required: true
    },
    altPhone : {
        type : String
    },
    addressLine1 : {
        type : String,
        // required : true
    },
    addressLine2 : {
        type : String,
    },
    pincode : {
        type : Number,
        // required : true
    },
    city : {
        type : String,
        // required : true
    },
    state : {
        type : String,
        // required : true
    },
    country : {
        type : String,
        // required : true
    },
    email : {
        type : String,
        // required : true
    },
    dateOfBirth : {
        type : Date,
        // required : true
    }
},{
    timestamps : true
});

const CustomerPd = mongoose.model('CustomerPd',customerPD_Schema);
module.exports = CustomerPd;