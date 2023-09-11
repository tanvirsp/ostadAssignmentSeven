exports.createMessage = async(req, res) =>{
    res.status(200).json({status:"success", data: "Create Message API"})
};


exports.readMessage  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Read Message API"})
}

exports.deleteMessage  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Delete Message API"})
}


exports.updateMessage  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Update Message API"})
}