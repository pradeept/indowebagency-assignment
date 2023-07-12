const categoryModel = require('../../models/category.model');

const getAllCategories = async (req,res)=>{
    try{
        const categories = await categoryModel.find();
        res.status(200).json({"status":"ok","categories":categories})
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

const createCategory = async (req,res)=>{
    try{
        const category = await categoryModel.findOne({name:req.body.userData.name});
        if(category){
            res.status(400).json({"status":"error","message":"category already exists"});
        }else{
            const newCategory = new categoryModel({
                name:req.body.userData.name
            });
            try{
                const newCat = await newCategory.save();
                res.status(200).json({"status":"ok","newCategory":newCat})

            }catch(e){
                console.log(e);
                res.status(500).json({"status":"error","message":"Internal server error"});
            }
        }
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

const updateCategory = async (req,res)=>{
    const updatedCat = {
        name:req.body.userData.name,
        approved:true
    }
    try{
        const updated = await categoryModel.findOneAndUpdate({name:req.body.userData.name},updatedCat,{new:true});
        res.status(200).json({"status":"ok","update":updated});
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}


const deleteCategory = async (req,res)=>{
    const name = req.params.name;
    console.log(req.params);
    try{
        const deletedCat =await categoryModel.deleteOne({name:name});
        res.status(200).json({"status":"ok","deletedContact":deletedCat});
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

module.exports = {getAllCategories, updateCategory,createCategory, deleteCategory};