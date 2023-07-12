const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
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
    subscription:{
        type:String,
        required:true
    }

});


const userModel = new mongoose.model('user',userSchema);

module.exports = userModel;