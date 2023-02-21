const express=require('express');
const app=express();
const router=require('./routes/routes')
const cors=require('cors');
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use('/',router);
const port=process.env.PORT || 4000;
app.listen(port,()=>{
  console.log("server listening on 4000...")
});