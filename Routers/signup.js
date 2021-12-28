const express = require('express');
const app = express();
const router = express.Router();
const users = require('../Models/newUser');

router.get('/',(req,res)=>{
    res.send("This is new user page");
});

router.post('/',async (req,res)=>{
    const User = new users({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    console.log(User);


    try {
        const savedUser = await User.save();
        res.send(savedUser);
    } catch (err) {
        res.status(200).send(err);
    }

});

module.exports = router;