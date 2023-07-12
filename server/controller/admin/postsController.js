const imageModel = require("../../models/posts/imagePosts.model");



//get posts posted by this vendor
const getAllPosts = async(req,res)=>{

    try{    
        const posts = await imageModel.find();
        res.status(200).json({"status":"ok","posts":posts});
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"})
    }
   
}


const editPost = (req,res)=>{
    //get Id of the post 
    //update the post
}


module.exports = {getAllPosts,editPost};