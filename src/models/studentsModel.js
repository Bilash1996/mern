const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    Name:{type: String , unique: true},
    Roll: {
        type: Number,
        min:[6,"minimum value 6 & maximum 122 but got {VALUE}"],
        max:[122,"minimum value 6 & maximum 122 but got {VALUE}"],
        
    },
    Number: {
        type: String,
       validate:{
        validator: function(value){ 
          return  /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)

        },
        message:props => "${props.value} is not Bangladeshi mobile number"
       } 
    },
    Class:String,
    Remarks: String
})
const StudentsModel = mongoose.model('Student',dataSchema)
module.exports =StudentsModel;