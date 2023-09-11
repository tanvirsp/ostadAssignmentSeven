const express = require('express');
const route = express.Router()


const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');






// BlogRoute
route.get("/createBlog", blogController.createBlog );
route.get("/readBlog", blogController.readBlog );
route.get("/deleteBlog", blogController.deleteBlog );
route.get("/updateBlog", blogController.updateBlog );


// Comment Route
route.get("/createComment", commentController.createComment );
route.get("/readComment", commentController.readComment );
route.get("/deleteComment", commentController.deleteComment );
route.get("/updateComment", commentController.updateComment );


// Message Route
route.get("/createMessage", messageController.createMessage );
route.get("/readMessage", messageController.readMessage );
route.get("/deleteMessage", messageController.deleteMessage );
route.get("/updateMessage", messageController.updateMessage );


// Portfolio Route
route.get("/createPortfolio", portfolioController.createPortfolio);
route.get("/readPortfolio", portfolioController.readPortfolio);
route.get("/deletePortfolio", portfolioController.deletePortfolio);
route.get("/updatePortfolio", portfolioController.updatePortfolio);


// Product Route
route.get("/createProduct", productController.createProduct);
route.get("/readProduct", productController.readProduct);
route.get("/deleteProduct", productController.deleteProduct);
route.get("/updateProduct", productController.updateProduct);


module.exports = route;