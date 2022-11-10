const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   name:{
    type: String,
    required:[true, "Add your name"]
   },
   email:{
    type: String,
    required:[true, "Add your email"],
    unique:true,
    trim:true,
    match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid emaial",
    ],
   },
   password:{
    type:String,
    required:[true, "Add your password"],
    minLength:[6,"Password must be upto six characters"],
    maxLength:[17,"Password must not be more than sevnteen characters"],
   },
   photo:{
     type: String,
     required:[true, "Please add a Photo"],
     default:"https://images.freeimages.com/images/large-previews/8a5/shooting-the-sunset-1381775.jpg"
   },
   phone:{
    type:String,
    default:"+91"
   },
   bio:{
    type:String,
    default:"bio",
    maxLength:[200,"Bio must not bemore than 200 characters"]
   }
}, 
 {
    timestamps:true,
 }
 );

const User = mongoose.model("user", userSchema)
module.exports = User