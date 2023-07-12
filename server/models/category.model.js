const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlength:[10,"Category name can't be more than 10 characters"],
        minlength:[3,"Category name should be at least 3 characters"]
    },
    approved:{
        type:Boolean,
        default:false
    }
});


const categoryModel = new mongoose.model('category',categorySchema);

module.exports = categoryModel;