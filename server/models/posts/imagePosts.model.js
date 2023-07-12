const mongoose = require('mongoose');
const categoryModel = require('../category.model')


const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'vendor',
        required:true
    },
    price:{
        type:Number,
        max:[2000,"Price can't be more than 2000"],
        default:0
    }
},{
    toJSON: {virtuals: true}
});

imageSchema.plugin(require('mongoose-autopopulate'));

const imageModel = new mongoose.model('imageposts',imageSchema);
module.exports = imageModel;