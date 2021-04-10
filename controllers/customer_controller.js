const CustomerPd = require('../models/customer_personal_details');
const CustomerAD = require('../models/customer_account_details');


module.exports.createCustomer = async function(req,res){
    let customerPD = await CustomerPd.create(req.body)
        

    let customerAD = await CustomerAD.create({
     
            bank_name : req.body.bank_name,
            account_type : req.body.account_type,
            card_type : req.body.card_type,
            customer : customerPD._id,
            
        });

        
        
        customerPD.account.push(customerAD);
        customerPD.save();

        if(req.xhr){
            return res.status(200).json({
                data : {
                    customerPD : customerPD
                },
                message : "Customer created"
            })
        }

        return res.redirect('back');    
}

// updating
module.exports.update =  function(req,res){
    console.log(req.params.id);
        CustomerPd.findByIdAndUpdate(req.params.id,req.body,function(err,customer){
            
            if(err){
                console.log("Error in updating customer");
            }
        });
        return res.redirect('back');     
    }
          
 


// deleting

module.exports.destroy = async function(req,res){
    try{
        let customerPD = await CustomerPd.findByIdAndRemove(req.params.id);
        console.log(req.params.id);
        await CustomerAD.findByIdAndRemove(req.params.id.account);
        
        if(req.xhr){
            return res.status(200).json({
                data:{
                    customer_id: req.params.id
                },
                message : "Customer deleted"
            })
        }

        return res.redirect('back');
    }catch(err){
        if(err){
            console.log("Error in deleting",err);
        }
    }
}
    
