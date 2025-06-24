require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Port =process.env.PORT || 8080
const bodyParser =require('body-parser')
const cors = require('cors')
const URL = process.env.MONGO_URL
const Listing = require("./model/listing");
const User =require("./model/user")
const { log } = require('console');
const wrapAsync = require("./utils/wrapAsync")
const ExpressError= require("./utils/ExpressError")
const listingSchema = require("./schema.js")
const flash = require("connect-flash")
const session  = require("express-session")
const passport = require("passport")
const Localstrategy = require("passport-local")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



main()
.then(()=>{
    console.log("database created");
    
})

.catch((err)=>{
    console.log(err);
    
})
async function main() {
    await mongoose.connect(URL)
    
}

app.use(cors())
app.use(bodyParser.json())
app.use(flash())
app.use(session({
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge:7 * 24 * 60 * 60 *1000,
        httpOnly:true   

    }
}))
app.use(passport.initialize());/*Initializes Passport middleware.

Must be called before authentication routes.

It sets up Passport to intercept and handle login requests. */
app.use(passport.session())//Enables persistent login sessions.It connects Passport to the Express session middleware.This line makes sure req.user is available after login on every request.
passport.use(new Localstrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

/* User submits login form.

Passport uses LocalStrategy to call User.authenticate().

If successful:

Passport stores user ID in session using serializeUser.

Express sets a connect.sid cookie.

On later requests:

Express reads the session ID from cookie.

Passport uses deserializeUser to fetch the full user.

The result is available in req.user.*/

const validateListing = (req,res,next)=>{
    let {error} =listingSchema.validate(req.body)
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next()
    }
}
//dummy data route
// app.get("/listings",async(req,res)=>{
//     const listing =  new Listing({
//         name:"sudeep",
//         age:22,
//         image:"https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133939.jpg?semt=ais_hybrid&w=740",
//         game:"valorant",
//         location:"Banglore"
//     })
//    let data =  await listing.save()
//     console.log(data);
    
//     res.send("done")
// })




//index
app.post("/listings",async(req,res,next)=>{
    if(!req.body){
throw new ExpressError(400,"Send valid data for listing")
    }
    let listing = new Listing(req.body)
    await listing.save()
   
    res.json("data added successfully");
})

//index
app.get("/listings/all",validateListing,wrapAsync(async(req,res)=>{
    let data = await Listing.find({})
    // console.log(data);
    res.json(data)
    
}))

// show
app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let list  = await Listing.findById(req.params.id)
  
   
    
    res.json(list)
}))

//delete
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  const { id } = req.params; 
  await  Listing.findByIdAndDelete(id)
  res.json("player deleted sucessfully")
}));

// update form
app.get("/listings/edit/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
 
    
    let data  = await Listing.findById(id)
    res.json(data)
}))
//update data
// app.put("/listings/update/:id",async(req,res)=>{
//     let {_id} = req.params
// let updatedata = await Listing.findByIdAndUpdate(_id,req.body)
// console.log(updatedata);

// })

    app.put("/listings/update/:id",validateListing,wrapAsync( async (req, res) => {
    const { id } = req.params;

  
        const updatedPlayer = await Listing.findByIdAndUpdate(id, req.body);
    res.json("player updated")
    
    
   }));

   //dmeouser
//    app.get("/demouser",async(req,res)=>{
//     let fakeuser = new User({
//         email:"sudeep@gmail.com",
//         username:"sudeep123",
//     })
//     let register =await User.register(fakeuser,"sudeep")
//     res.send(register)
//    })

// user
app.post("/signup",wrapAsync(async(req,res)=>{
 let {email,username,password} = req.body
 const user =  new User({email,username})
const reguser =await  User.register(user,password)
console.log(reguser);
res.json("Signup Successfully")
   }))

//login
app.post("/login",passport.authenticate("local",{failureRedirect:'/login'}),wrapAsync(async(req,res)=>{
    console.log(req.body);
    
    if(req.user){
res.json("login successfully completed")
    }
    else{
        res.json("Username and password not found")
    }

}))







// middleware
app.all(/.*/,(req,res,next)=>{
    next(new ExpressError("404","Page Not found ")); // it will matches wiith all existting route if its not there it throw the error
})
app.use((err,req,res,next)=>{
    let {status = 404,message="something went wrong"} = err;
    res.status(status).send(message)
})



app.listen(Port,()=>{
    console.log("server started");
    
})

