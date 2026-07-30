const express = require("express");
const router = express.Router();

const { createPaste } = require("../controllers/pasteController");

router.post("/", createPaste);

module.exports = router;