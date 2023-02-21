const mongoose=require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connection successfull...");
});

const schema=mongoose.Schema({
    id:{
        type:Number
    },
    note:{
        type:String,
    },
    createdAt:{
        type:Date,
        expires:'20m',
        default:Date.now
    }
});

const notes=mongoose.model("notes",schema);
module.exports=notes;