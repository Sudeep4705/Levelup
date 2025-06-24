const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema =  new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    required:true
    },
    image:{
        type:String,
        required:true
    },
    game:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})



const Listing = mongoose.model("Listing",listingSchema)
module.exports=Listing