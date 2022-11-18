const studentsModel = require('../models/studentsModel')
exports.insertStudent=(req,res)=>{
    let reqBody = req.body;
    studentsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status: 'fail',data: err})
        }
        else{
            res.status(201).json({status: 'success',data: data})
        }
    })
}


exports.readStudent=(req, res) => {
    let Query ={};
    let Projection ="Name Roll Class Remarks"
    studentsModel.find(Query,Projection,(err, data) => {
         if(err){
            res.status(400).json({status: 'fail',data: err})
        }
        else{
            res.status(201).json({status: 'success',data: data})
        }
    })
}
exports.deleteStudent=(req, res) => {
    let id = req.params.id;
    let Query ={_id:id};
    studentsModel.remove(Query,(err, data)=>{
        if(err){
            res.status(400).json({status: 'fail',data: err})
        }
        else{
            res.status(201).json({status: 'success',data: data})
        }
    })
}