exports.createBlog = async(req, res) =>{
    res.status(200).json({status:"success", data: "Create Blog API"})
};


exports.readBlog  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Read Blog API"})
}

exports.deleteBlog  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Delete Blog API"})
}


exports.updateBlog  = async(req, res) =>{
    res.status(200).json({status:"success", data: "Update Blog API"})
}