const express = require('express');
const router = require('./routes/api')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());


let uri = 'mongodb://127.0.0.1:27017/school';
let option = {user : "",pass:""};
mongoose.connect(uri, option,(error)=>{
    console.log('connected to mongodb');
    console.log(error);
});
app.use('/api/v1',router);





app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:'Route is not defined'})
})

module.exports =app;