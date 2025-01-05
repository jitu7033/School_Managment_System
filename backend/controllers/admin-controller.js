const bcrypt = require('bcrypt');
const Admin = require('../models/adminSchema.js');
const Sclass = require('../models/sclassSchema.js');
const Student = require('../models/studentSchema.js');
const Teacher = require('../models/teacherSchema.js');
const Subject = require('../models/subjectSchema.js');
const Notice = require('../models/noticeSchema.js');
const Complain = require('../models/complainSchema.js');


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

const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined;
            res.send(admin);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = { adminRegister, adminLogIn};
