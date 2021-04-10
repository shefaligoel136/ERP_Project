const Customers = require('../../../models/customer_personal_details')

module.exports.index = async function(req,res){

    let customers = await Customers.find({}).populate('account');

    return res.json(200,{
        message : "List of customers",
        customers : customers
    })
} 