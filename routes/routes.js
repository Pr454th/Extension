const express = require("express");
const router = express.Router();
const { setNote, getNote } = require("../controllers/requestHandler");

router.post("/setnote", setNote);
router.post("/getnote/:id", getNote);

module.exports = router;
