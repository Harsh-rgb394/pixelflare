// 9NVCDgBveJRir86Z 
// harsh 
const mongoose=require("mongoose");
const Mongo_Url="mongodb+srv://harsh:9NVCDgBveJRir86Z@cluster0.ns6blgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MongoConnect=async()=>{
    try {
        await mongoose.connect(Mongo_Url);

        console.log("Connection Successfull");
        
    } catch (error) {
        console.log(error);
        console.log("Connection failure");
        
    }
}


module.exports=MongoConnect;