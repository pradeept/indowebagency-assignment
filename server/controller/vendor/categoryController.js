const categoryModel = require('../../models/category.model');


//get all available categories
const getAllCategories = async (req,res)=>{
    try{
        const categories = await categoryModel.find({approved:true});
        res.status(200).json({"status":"ok","categories":categories});
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

//request a category for admin
const requestCategory = async (req,res)=>{
    const newCategory = new categoryModel({
        name:req.body.userData
    });
    console.log(req.body.userData);
    try{
        //checking for duplicate names is skipped for time being
        const category =await newCategory.save();
        res.status(200).json({"status":"ok","categories":category});
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

module.exports = {getAllCategories, requestCategory}