const imageModel =require('../../models/posts/imagePosts.model')

const getPosts = async (req,res)=>{
    const userType = req.params.type;
    let posts;
    try{
        if(userType === "free"){
            posts = await imageModel.find({'price':{$lte:0}})
        }else if(userType === "premium"){
            posts = await imageModel.find();
        }
        res.status(200).json({"status":"ok","posts":posts});
        
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal Server error!"})
    }
}

const editPost = async(req,res)=>{
    const id = req.body.userData.id;
    try{
        const post = await imageModel.updateOne({_id:id},{
            $set:{likes:req.body.userData.likes, dislikes:req.body.userData.dislikes}
        })
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal Server error!"})
    }
    

}
module.exports = {getPosts,editPost}