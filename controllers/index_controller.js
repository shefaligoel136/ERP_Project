// login

// module.exports.index = function(req,res){
//     // return res.end('<h1>Login page</h1>');

//     // by using views
//     return res.render('login',{
//         title: 'Admin Login Page'
//     })
// }

const Customers = require('../models/customer_personal_details');

module.exports.crmModule = function(req,res){

    Customers.find({},function(err,customers){
        res.render('crmModule',{
            title : 'CRM', 
            customers : customers
        })
    })

    
} 