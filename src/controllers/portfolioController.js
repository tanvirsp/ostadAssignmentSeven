exports.createPortfolio = async(req, res) =>{
    res.status(200).json({status:"success", data: "Create Portfolio API"})
};


exports.readPortfolio = async(req, res) =>{
    res.status(200).json({status:"success", data: "Read Portfolio API"})
}

exports.deletePortfolio = async(req, res) =>{
    res.status(200).json({status:"success", data: "Delete Portfolio API"})
}


exports.updatePortfolio = async(req, res) =>{
    res.status(200).json({status:"success", data: "Update Portfolio API"})
}