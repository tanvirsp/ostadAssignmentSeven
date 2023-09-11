exports.createProduct = async(req, res) =>{
    res.status(200).json({status:"success", data: "Create Product API"})
};


exports.readProduct = async(req, res) =>{
    res.status(200).json({status:"success", data: "Read Product API"})
}

exports.deleteProduct = async(req, res) =>{
    res.status(200).json({status:"success", data: "Delete Product API"})
}


exports.updateProduct = async(req, res) =>{
    res.status(200).json({status:"success", data: "Update Product API"})
}