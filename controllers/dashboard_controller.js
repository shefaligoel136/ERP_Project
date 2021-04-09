// contains all the erp modules

module.exports.dashBoard = function(req,res){
    // res.end('<h1>ERP Modules</h1>');

    // by using views and ejs

    res.render('dashboard',{
        title : 'DashBoard'
    })
}

module.exports.crmModule = function(req,res){
    res.render('crmModule',{
        title : 'CRM'
    })
} 