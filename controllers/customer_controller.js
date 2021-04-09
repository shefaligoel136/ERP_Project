const CustomerPd = require('../models/customer_personal_details');


module.exports.createCustomer = function(req,res){
    CustomerPd.create(req.body ,function(err,customer){
        if(err){
            console.log("Error in creating the customer",err);
            return;
        }
        console.log(req.body);
        res.redirect('back');
    })
}