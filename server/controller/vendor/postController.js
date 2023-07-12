const imageModel = require('../../models/posts/imagePosts.model')

//get posts posted by this vendor
const getAllPosts = async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const posts = await imageModel.find({owner:id});
    res.status(200).json({"status":"ok","posts":posts});

}


const editPost = async(req,res)=>{
    //get Id of the post 
    //update the post
    res.status(200).json({"status":"ok","message":"editpost reached"})
}


module.exports = {getAllPosts,editPost};