// login

module.exports.index = function(req,res){
    // return res.end('<h1>Login page</h1>');

    // by using views
    return res.render('login',{
        title: 'Admin Login Page'
    })
}