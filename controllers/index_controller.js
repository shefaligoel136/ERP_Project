// login

// module.exports.index = function(req,res){
//     // return res.end('<h1>Login page</h1>');

//     // by using views
//     return res.render('login',{
//         title: 'Admin Login Page'
//     })
// }

const Customers = require('../models/customer_personal_details');
const CustomersAD = require('../models/customer_account_details');

// Customers.account = CustomersAD._id;



module.exports.crmModule = async function(req,res){

    try{
        let customers = await Customers.find({}).populate('account');
    
        return res.render('crmModule',{
        title : 'CRM', 
        customers : customers,

      });
    }catch(err){
        console.log("Error",err);
    }
    
} 