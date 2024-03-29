const Post=require('../model/Post');




const PostController= {

    savePost: async function (req, res, next) {
        try {
            const postData = req.body;

            const post = await Post.create(postData);

            res.status(200).json(post);

        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    getAllPost:async function (req, res, next) {
        try {
            const PostList = await Post.find();

            res.status(200).json(PostList);
        }catch (err){
            console.log(err);
            res.status(500).json({error:'something went wrong !'});
        }
    },


}


module.exports=PostController
