const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default : "teacher"
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "admin"
    },
    teachSubject : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "subject"

    },
    teachSclass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sclass",
        require : true
    },
    attendance : {
        data:{
            type : data,
            required : true
        },
        presentcount : {
            type : String
        },
        absentcount : {
            type : String
        }
    }
} , { timestamps : true});

module.exports = mongoose.model("teacher", teacherSchema);