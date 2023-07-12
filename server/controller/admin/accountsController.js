const userModel = require('../../models/account/user.model');
const vendorModel = require('../../models/account/vendor.model');


const getAllAccounts = async (req,res)=>{
    try{
        const users = await userModel.find();
        const vendors = await vendorModel.find();
        if(!users && !vendors){
            res.status(404).json({"status":"error","message":"Data not found!"});
        }else{
            res.status(200).json({
                "status":"ok",
                "users":users,
                "vendors":vendors
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal Server error"});
    }
}

const createAccount = async (req,res) =>{
    const accType = req.body.userData.type; 
    try{
        if(accType === "internal"){
            const newVendor = new vendorModel({
                name:req.body.userData.name,
                email:req.body.userData.email,
                password:req.body.userData.password
            });
            const newV = await newVendor.save();
            res.status(200).json({"status":"ok","newVendor":newV});
        }else if(accType === "external"){
            const newUser = new userModel({
                name:req.body.userData.name,
                email:req.body.userData.email,
                password:req.body.userData.password,
                subscription:req.body.userData.subscription
            });
            const newU = await newUser.save();
            res.status(200).json({"status":"ok","newUser":newU});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({"status":"error","message":"Internal server error"});
    }
}

const editAccount = async (req,res)=>{
    const accType = req.body.userData.type;
    if(accType === "internal"){
        const updatedVendor = {

            name:req.body.userData.name,
            email:req.body.userData.email,
            password:req.body.userData.password,
        }
        try{
            const vendor = await vendorModel.findOneAndUpdate({name:req.body.userData.name},updatedVendor,{new:true});
            console.log(vendor);
            res.status(200).json({"status":"ok","updatedVendor":vendor});
        }catch(e){
            console.log(e);
            res.status(500).json({"status":"error","message":"Internal server error"});
        }
    }
    else if(accType === "external"){
            const updatedUser = {
            
            name:req.body.userData.name,
            email:req.body.userData.email,
            password:req.body.userData.password,
            subscription:req.body.userData.subscription
        };
        try{
            const user = await userModel.findOneAndUpdate({name:req.body.userData.name},updatedUser,{new:true});
            console.log(user);
            res.status(200).json({"status":"ok","updatedUser":user});
        }catch(e){
            console.log(e);
            res.status(500).json({"status":"error","message":"Internal server error"});
        }
    }
}

const deleteAccount = async (req,res)=>{
    const accType = req.params.type;
        if(accType === "internal"){
            try{
                const vendor = await vendorModel.deleteOne({_id:req.params.id})
                res.status(200).json({"status":"ok","deletedContact":vendor});
            }catch(e){
                console.log(e);
                res.status(500).json({"status":"error","message":"Internal server error"});
                
            }
        }else if(accType === "external"){
            try{
                const user = await userModel.deleteOne({_id:req.params.id})
                res.status(200).json({"status":"ok","deletedContact":user});
            }catch(e){
                console.log(e);
                res.status(500).json({"status":"error","message":"Internal server error"});
            }
        }
}

module.exports = {getAllAccounts, createAccount, editAccount, deleteAccount};