var express = require('express');
var router = express.Router();

const PostController=require('../controller/PostController');

router.post('/savePost', PostController.savePost);
router.get('/getAllPost', PostController.getAllPost);


module.exports = router;
