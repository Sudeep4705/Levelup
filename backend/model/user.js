const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const passportLoocalmangoose = require('passport-local-mongoose')



const userSchema = new Schema({
    email:{
        type:String,
        required:true
    }

    
})

userSchema.plugin(passportLoocalmangoose)


const User = mongoose.model("User",userSchema)
module.exports = User