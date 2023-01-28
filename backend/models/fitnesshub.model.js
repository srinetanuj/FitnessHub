const mongoose = require("mongoose");

const fitHubUserSchema = ({
    fname:String,
    lname:String,
    email:String,
    password:String,
    cpassword:String,
    gender:String,
    birthday:String,
    height:Number,
    weight:Number,
});

const fitnesshubUserModel = mongoose.model("fitnesshubuser",fitHubUserSchema);

module.exports = {
    fitnesshubUserModel
}