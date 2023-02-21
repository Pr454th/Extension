const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://prasathkarthiban1999:8Af5SsjH9FmzMAea@noteextension.yqbdegh.mongodb.net/?retryWrites=true&w=majority').then(()=>{
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