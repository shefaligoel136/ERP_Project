const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/erp_project_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting"));

db.once('open',function(){
    console.log('Connected to DB:: Mongo');
});

module.exports = db;