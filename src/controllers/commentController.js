exports.createComment = async(req, res) =>{
    res.status(200).json({status:"success", data: "Create Comment API"})
};


exports.readComment  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Read Comment API"})
}

exports.deleteComment  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Delete Comment API"})
}


exports.updateComment  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Update Comment API"})
}