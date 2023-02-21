const notes=require('../db/noteModel');

exports.setNote=async (req,res)=>{
    try{
        console.log("setting note...");
        const { id } = req.params;
        console.log(req.body);
        const newNote=await notes.create({id:req.body.id,note:req.body.note});
        if(newNote!=null){
            res.status(200).json({
                status:1
            });
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.getNote=async (req,res)=>{
    try{
        console.log("getting note...");
        const note=await notes.find({id:req.params.id},{_id:0,__v:0,createdAt:0});
        if(note.length>0){
            res.status(200).json({
                note:note
            });
        }
        else{
            console.log("no note");
        }
    }
    catch(err){
        console.log(err);
    }
}