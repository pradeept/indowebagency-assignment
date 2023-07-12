const imageModel = require('../../models/posts/imagePosts.model')
const categoryModel = require('../../models/category.model')
const vendorModel = require('../../models/account/vendor.model')

const uploadImage = async (req,res)=>{
    //need category id/name, vendor id

    // true: add image to database

    //false: respond the same

    const category = req.params.category;
    const vendorId = req.body.userData.owner;
    const price = req.body.userData.price;
    const name = `${Date.now()}.jpeg`;
    const image = req.body.userData.src;
    
    const categoryId = await categoryModel.findOne({name:category});
    const vendor = await vendorModel.findOne({_id:vendorId});
    const newImage = new imageModel({
        name:name,
        image:image,
        price: price,
        category:categoryId._id,
        owner:vendor._id
    });

        newImage.save()
        .then((savedImage)=>{
            try{
                // savedImage.populate('category').exec();
                // savedImage.populate('owner').exec();
                console.log(savedImage);
            }catch(e){
                console.log(e);
            }   
            res.status(200).json({"status":"ok","message":"Image uploaded"})
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({"status":"error","message":"Internal server error"});
        });

    
}

const uploadVideo = (req,res)=>{
    //get Category from req (req.params.category)
    //check if category exists

    //tru: add video to database

    //false: respond the same
}

module.exports = {uploadImage,uploadVideo}