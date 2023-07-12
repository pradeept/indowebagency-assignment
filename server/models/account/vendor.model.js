const mongoose = require('mongoose');


const vendorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlenght:[20,"name must be less than 20 characters"],
    },
    email:{
        type:String,
        required:true,
        maxlenght:[30, "Email is too long"]
    },
    password:{
        type:String,
        required:true,
        maxlenght:[12,"Password can't be more than 12 characters"]
    },


});


const vendorModel = new mongoose.model('vendor',vendorSchema);

module.exports = vendorModel;