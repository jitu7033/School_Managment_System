const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        types:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Admin"
    },
    SchoolName:{
        type:String,
        unique:true,
        required:"true"
    }
});

module.exports = mongoose.model("admin",adminSchema);