const express=require("express");
const app=express();
const cors=require("cors");
const MongoConnect=require("./Config/db");
const dotenv=require("dotenv");

dotenv.config();
MongoConnect();

const PORT=process.env.PORT;


// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"50mb"}))
app.use("/user",require("./Routes/userRoute"));


// app.get("/",(req,res)=>{
//     res.send("first Server");
// })



app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})