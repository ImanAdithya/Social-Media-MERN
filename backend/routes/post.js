var express = require('express');
var router = express.Router();

const PostController=require('../controller/PostController');

router.post('/savePost', PostController.savePost);


module.exports = router;
