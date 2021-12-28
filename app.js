const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const signup = require('./Routers/signup');
require('dotenv/config');


// Booting the server up

const app = express();
app.use(cors());
app.use(express.json());





// app.use('/addnewUser',signup);


// DB connection

mongoose.connect(process.env.DBCONNECTION
,()=>{
    console.log("Database connected");
});



// Routes

app.use('/addnewUser',signup);

app.get("/",(req,res)=>{
    res.send("Hello ji");
})

app.listen(8000,()=>{
    console.log("Server running in port 8000");
});