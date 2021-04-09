const express = require('express');
const app = express();

const port = 7700;

//mongo db connection
const db = require('./configs/mongoose');

app.use(express.urlencoded({extended: true}));

// setting up the ejs
app.set('view engine','ejs'); 
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting to the port : ${err}`);
    }else{
        console.log(`Server is running on the port : ${port}`);
    }
});