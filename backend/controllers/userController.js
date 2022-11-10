const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const registerUser = asyncHandler( async (req, res) => {
   
    const {name, email, password} = req.body

    //validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all required fields")
    }
    if(password.length < 6){
        res.status(400)
        throw new Error("Password must be six characters")
    }

    const userExists = await User.findOne({email})
    if (userExists)  {
        res.status(400)
        throw new Error("Email is already exsits")
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if (user){
        res.status(201)
    }

    });



module.exports= {
    registerUser,
}