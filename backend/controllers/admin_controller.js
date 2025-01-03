const bcrypt = require('bcrypt')
const Admin = require('../models/adminSchema.js')

const adminRegister = async (req,res) =>{
    try{
        const admin = new Admin({
            ...req.body
        });

        const existingAdminByEmail = await Admin.findOne({email : req.body.email})
        const existingSchool = await Admin.findOne({schoolName : req.body.schoolName})

        if(existingAdminByEmail){
            res.send({message : 'Email already Exist'});
        }
        else if(existingSchool){
            res.send({message : 'school name is akrerady exist'})
        }
        else{
            let result = await admin.save();
            result.password = undefined
            res.send(result);
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const adminLogIn = async (req,res) =>{
    if(req.body.email && req.body.password){
        let admin = await Admin.findOne({email : req.body.email});
        if(admin){
            if(req.body.password === admin.password){
                admin.password = undefined;
                res.send(admin);
            }
            else{
                res.send({message : "Invalid Password"})
            }
        }else{
            res.send({message : "user Not found"})
        }
    }
    else{
        res.send({message : "Email and password are required"})
    }
}


module.exports = {adminRegister,adminLogIn}