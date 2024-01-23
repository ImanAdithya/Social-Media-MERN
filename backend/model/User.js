const mongoose=require('mongoose');

const UserModel=mongoose.Schema(
    {
        "userName": {
            require:true,
            type:String,
            unique:true,
            index:true  // for better perfomance
        },
        "jobTitle": {
            require:true,
            type:String
        },
        "work": {
            require:true,
            type:String
        },
        "address": {
            require:true,
            type:String
        },
        "password": {
            require:true,
            type:String
        },
        "image": {
            type:String
        }
    },
    {versionKey:false}

);

const User=mongoose.model('User',UserModel);

module.exports=User;
