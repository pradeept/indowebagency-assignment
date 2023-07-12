const userModel = require('../../models/account/user.model');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{
    console.log(req.body)
    const user = await userModel.findOne({name:req.body.userData.name});

    if(user){
        if(user.password === req.body.userData.password){
            const token = jwt.sign(user.name,process.env.JWT_SECRET_KEY);
            res.status(200).json({"status":"ok","token":token,"userType":user.subscription,"user":user.id});
        }else{
            res.status(500).json({"status":"error","message":"Username/Password is wrong"});
        }
    }else{
        res.status(500).json({"status":"error","message":"Username/Password is wrong"});
    }
}

const register = async (req,res)=>{
    const user = await userModel.findOne({name:req.body.userData.name});

    if(user){
        res.status(406).json({"status":"error","message":"User already exists"});
    }else{
        const newUser = new userModel({
            name:req.body.userData.name,
            email:req.body.userData.email,
            password:req.body.userData.password,
            subscription:req.body.userData.subscription
        });
        const newU = await newUser.save()
        .then(()=>{
            res.status(200).json({"status":"ok","newUser":newU});
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({"status":"error","message":"Internal server error"});    
        })
    }
}


module.exports = {login,register}