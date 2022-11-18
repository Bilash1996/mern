exports.hello =(req,res) => {
    res.status(200).json({status: 'ok', data:"this is my second express api"});
}