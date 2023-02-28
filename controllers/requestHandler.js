const notes = require("../db/noteModel");

exports.setNote = async (req, res) => {
  try {
    console.log("setting note...");
    const { id } = req.params;
    console.log(req.body);
    const newNote = await notes.create({
      id: req.body.id,
      note: req.body.note,
      hash: req.body.hash,
    });
    if (newNote != null) {
      res.status(200).json({
        status: 1,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await notes.findOne({ id: req.params.id });
    if (note && note.hash === req.body.hash) {
      res.status(200).json({ note });
      return;
    }
    res.status(400).json({
      error: "No note found",
    });
  } catch (err) {
    console.log(err);
  }
};
