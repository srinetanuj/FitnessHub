const express = require('express');
const {fitnesshubUserModel} = require("../models/fitnesshub.model");
const bcrypt = require("bcrypt");
const fitnesshubUserRouter = express.Router();
const jwt = require("jsonwebtoken");

fitnesshubUserRouter.use(express.json());

fitnesshubUserRouter.get("/",async(req,res)=>{
    try{
           const user = await fitnesshubUserModel.find();
           res.send(user);
        //    console.log(user)
    }catch(e){
         console.log(e);
         console.log("Errpor while getting user")
    }
})

fitnesshubUserRouter.post("/signup", async(req,res)=>{
    const {fname,lname,email,password,cpassword,gender,birthday,height,weight} = req.body;
    try{

        const find_user = await fitnesshubUserModel.find({email});

        if(find_user.length>0){
            console.log("User are already exist");
            res.send(find_user)
        }else{
            bcrypt.hash(password, 5, async(err,hash_password)=>{
                if(err){
                    console.log(err);
                }else{
                    const user = new fitnesshubUserModel({fname,lname,email,password:hash_password,cpassword:hash_password,gender,birthday,height,weight});
                    await user.save();
                    res.send(user)
                }
            })
        }
    }catch(e){
        console.log("Something went wrong");
        console.log(e);
    }
});

fitnesshubUserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await fitnesshubUserModel.find({email});
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err,result)=>{
                if(result){
                    const token = jwt.sign({userID: user[0]._id}, "anuj");
                    res.send([{"message":"Login Successfully", "token":token,"id": user[0]._id , fname: user[0].fname}])
                }else{
                    res.send([])
                }
            })
        }else{
            res.send([])
        }

    }catch(e){
        console.log("Something went wrong");
        console.log(e);
    }
})

module.exports={
    fitnesshubUserRouter
}