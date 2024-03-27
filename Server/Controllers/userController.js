const user=require("../Models/user");
const bcrypjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

const logincontroller=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const exist_user=await user.findOne({email});

        if(!exist_user){
            res.status(404).json({message:"User does not exist",success:false});
        }

        const matchedpassword=await bcrypjs.compare(password,exist_user.password);

        if(!matchedpassword){
            res.status(404).json({message:"Password not match",success:false});
        }

        const token=await jwt.sign({email:exist_user.email,id:exist_user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

        res.status(200).json({message:"User login Sucessfully",success:true,data:exist_user,token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while registing User",success:false});
    }


}

const regsitercontroller=async(req,res)=>{
    try {
        const {name,email,password,confirmpassword}=req.body;

        const exist_user=await user.findOne({email});

        if(exist_user){
            res.status(404).json({message:"User already exist",success:false});
        }

        if(password!==confirmpassword){
            res.status(404).json({message:"password not match ",success:false});

        }

        const hashedpassword=await bcrypjs.hash(password,10);

        const result=await user.create({name,email,password:hashedpassword,confirmpassword:hashedpassword});

        res.status(200).json({message:"User register Successfully",success:true,data:result});


        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while registing User",success:false});

        
    }

}

module.exports={logincontroller,regsitercontroller};