const notes=require('../db/noteModel');

exports.setNote=async (req,res)=>{
    try{
        console.log("setting note...");
        const { id } = req.params;
        console.log(req);
        // try now yes da id varudhu
        // but note content varla la?yea params pass panna varudhu body content vara matingudhu
        // in thunderclient u r using json in body tab la? yes da
        const newNote=await notes.create({id,note:req.body.note});
        if(newNote!=null){
            res.status(200).json({
                status:"scuuess"
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
        const note=await notes.find({_id:req.params.id});
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