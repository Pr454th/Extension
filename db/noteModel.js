const mongoose=require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connection successfull...");
});

const schema=mongoose.Schema({
    id:{
        type:String
    },
    note:{
        type:String,
        default:"Empty"
    },
    createdAt:{
        type:Date,
        expires:'20m',
        default:Date.now
    }
});

const notes=mongoose.model("notes",schema);
module.exports=notes;