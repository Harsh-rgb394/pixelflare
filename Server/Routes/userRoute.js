const express=require("express");
const {logincontroller,regsitercontroller}=require("../Controllers/userController");
const router=express.Router();



router.post("/login",logincontroller);

router.post("/register",regsitercontroller);


module.exports=router;