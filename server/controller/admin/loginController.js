const adminModel = require('../../models/account/admin.model');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{

    const user = await adminModel.findOne({name:req.body.userData.name});
    if(user){
        console.log(user);
        if(user.password === req.body.userData.password){
            const token = jwt.sign(user.name,process.env.JWT_SECRET_KEY);
            console.log(token);
            res.status(200).json({"status":"ok","token":token});
        }else{
            res.status(404).json({"status":"error","message":"Username/Password is wrong"});
        }
    }else{
        res.status(404).json({"status":"error","message":"Username/Password is wrong"});
    }
}




module.exports = {login}