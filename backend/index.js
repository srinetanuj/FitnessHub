const express = require('express');

const {connection }= require ("./config/db");
const {fitnesshubUserRouter} = require("./routes/fitnesshub.route");

require("dotenv").config();

const cors=require("cors");

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.use("/users",fitnesshubUserRouter);


app.get ("/", (req, res) => {
    res.send("Welcome");
});

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log(`Server is running on port ${process.env.port}`);
    }catch(e){
        console.log(e);
        console.log("Some error occurred while connecting to the server");
    }
})